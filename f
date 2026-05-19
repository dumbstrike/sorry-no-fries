[1mdiff --git a/app/page.tsx b/app/page.tsx[m
[1mindex d4140c2..a793954 100644[m
[1m--- a/app/page.tsx[m
[1m+++ b/app/page.tsx[m
[36m@@ -15,23 +15,29 @@[m [mexport default function HomePage() {[m
           />[m
         </div>[m
 [m
[31m-        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />[m
[32m+[m[32m       <>[m
[32m+[m[32m  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />[m
 [m
[31m-        <div className="relative z-10 max-w-5xl text-center">[m
[32m+[m[41m [m
[32m+[m[32m</>[m
[32m+[m
[32m+[m[32m        <div className="relative z-10 max-w-6xl text-center">[m
           [m
           <p className="uppercase tracking-[0.4em] text-sm text-[#B6A9FF] mb-6">[m
             beans all day[m
           </p>[m
 [m
[31m-          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight">[m
[32m+[m[32m        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.04em]">[m
             SORRY.[m
             <br />[m
[31m-            NO.[m
[32m+[m[32m           <span className="text-[#8D7BFF] drop-shadow-[0_0_18px_rgba(141,123,255,0.45)]">[m
[32m+[m[32m  NO.[m
[32m+[m[32m</span>[m
             <br />[m
             FRIES[m
           </h1>[m
 [m
[31m-          <p className="mt-8 text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">[m
[32m+[m[32m          <p className="mt-10 text-white/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">[m
             A cinematic restaurant and lifestyle experience built around the[m
             fictional color burple, experimental food culture, and the Burplefolk universe.[m
           </p>[m
