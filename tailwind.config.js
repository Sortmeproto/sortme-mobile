   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./App.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {
         colors: {
           primary:"#1DB954",
           secondary:"#0284C7",
           surface:"#F8F9FA",
           border:"#E5E7EB",
           text:{DEFAULT:"#111111",soft:"#6B7280"}
         },
         borderRadius:{app:"14px"},
         boxShadow:{app:"0 4px 12px rgba(16,24,40,.08)"}
       }
     }
   };