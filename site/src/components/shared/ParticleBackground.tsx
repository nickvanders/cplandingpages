import { useEffect, useRef } from "react";

interface Particle { x: number; y: number; vx: number; vy: number; radius: number; color: string; alpha: number; }

export default function ParticleBackground({ density = 20000, alphaMin = 0.45, alphaMax = 0.75 }: { density?: number; alphaMin?: number; alphaMax?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const logicalRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const colors = ["rgba(242, 80, 106, ","rgba(242, 80, 106, ","rgba(182, 122, 236, ","rgba(182, 122, 236, ","rgba(155, 81, 224, "];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1, w = canvas.offsetWidth, h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      logicalRef.current = { w, h };
    };
    const init = () => {
      const { w, h } = logicalRef.current;
      const ar = alphaMax - alphaMin;
      particlesRef.current = Array.from({ length: Math.floor(w * h / density) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * ar + alphaMin,
      }));
    };
    const draw = () => {
      const { w, h } = logicalRef.current;
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current, m = mouseRef.current;
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y, d = Math.sqrt(dx*dx+dy*dy);
          if (d < 140) { ctx.beginPath(); ctx.strokeStyle = `rgba(182,122,236,${(1-d/140)*0.38})`; ctx.lineWidth = 1.2; ctx.moveTo(ps[i].x,ps[i].y);
ctx.lineTo(ps[j].x,ps[j].y); ctx.stroke(); }
        }
        if (m.x !== -9999) {
          const dx = ps[i].x - m.x, dy = ps[i].y - m.y, d = Math.sqrt(dx*dx+dy*dy);
          if (d < 130) { ctx.beginPath(); ctx.strokeStyle = `rgba(242,80,106,${(1-d/130)*0.55})`; ctx.lineWidth = 1; ctx.moveTo(m.x,m.y);
ctx.lineTo(ps[i].x,ps[i].y); ctx.stroke(); }
        }
        const p = ps[i];
        if (m.x !== -9999) { const dx=p.x-m.x,dy=p.y-m.y,dist=Math.sqrt(dx*dx+dy*dy); if(dist<110&&dist>0){const f=((110-dist)/110)*0.35; p.vx+=(dx/dist)*f;
p.vy+=(dy/dist)*f;} }
        p.vx *= 0.97; p.vy *= 0.97;
        const sp = Math.sqrt(p.vx*p.vx+p.vy*p.vy); if(sp>4){p.vx=(p.vx/sp)*4;p.vy=(p.vy/sp)*4;}
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
        p.x=Math.max(0,Math.min(w,p.x)); p.y=Math.max(0,Math.min(h,p.y));
        ctx.beginPath(); ctx.arc(p.x,p.y,p.radius,0,Math.PI*2); ctx.fillStyle=p.color+p.alpha+")"; ctx.fill();
      }
      animRef.current = requestAnimationFrame(draw);
    };
    resize(); init(); draw();
    const onResize = () => { resize(); init(); };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect(), x = e.clientX-r.left, y = e.clientY-r.top, {w,h} = logicalRef.current;
      mouseRef.current = (x>=0&&x<=w&&y>=0&&y<=h) ? {x,y} : {x:-9999,y:-9999};
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouseRef.current={x:-9999,y:-9999}; });
    return () => { window.removeEventListener("resize",onResize); window.removeEventListener("mousemove",onMove);
if(animRef.current)cancelAnimationFrame(animRef.current); };
  }, [density, alphaMin, alphaMax]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />;
}
