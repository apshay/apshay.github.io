"use client";
import { useEffect } from 'react';

export default function AOSComponent({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              console.log(entry.target);
            }
          });
        }, {rootMargin: '0px', threshold: .5 });
    
        const hideElements = document.querySelectorAll(".hide");
        hideElements.forEach(element => {
          console.log(element);
          observer.observe(element);
        });
    
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        }
    
        return () => observer.disconnect();
      }, []);

    return <>{children}</>
}