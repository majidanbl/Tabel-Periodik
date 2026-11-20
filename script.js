const raw = `
1|H|Hidrogen|1|1|nonmetal
2|He|Helium|18|1|noble
3|Li|Litium|1|2|alkali
4|Be|Berilium|2|2|alkaline
5|B|Boron|13|2|metalloid
6|C|Karbon|14|2|nonmetal
7|N|Nitrogen|15|2|nonmetal
8|O|Oksigen|16|2|nonmetal
9|F|Fluorin|17|2|halogen
10|Ne|Neon|18|2|noble
11|Na|Natrium|1|3|alkali
12|Mg|Magnesium|2|3|alkaline
13|Al|Aluminium|13|3|post
14|Si|Silikon|14|3|metalloid
15|P|Fosfor|15|3|nonmetal
16|S|Sulfur|16|3|nonmetal
17|Cl|Klorin|17|3|halogen
18|Ar|Argon|18|3|noble
19|K|Kalium|1|4|alkali
20|Ca|Kalsium|2|4|alkaline
21|Sc|Skandium|3|4|transition
22|Ti|Titanium|4|4|transition
23|V|Vanadium|5|4|transition
24|Cr|Kromium|6|4|transition
25|Mn|Mangan|7|4|transition
26|Fe|Besi|8|4|transition
27|Co|Kobalt|9|4|transition
28|Ni|Nikel|10|4|transition
29|Cu|Tembaga|11|4|transition
30|Zn|Seng|12|4|transition
31|Ga|Galium|13|4|post
32|Ge|Germanium|14|4|metalloid
33|As|Arsen|15|4|metalloid
34|Se|Selenium|16|4|nonmetal
35|Br|Bromin|17|4|halogen
36|Kr|Kripton|18|4|noble
37|Rb|Rubidium|1|5|alkali
38|Sr|Stronsium|2|5|alkaline
39|Y|Itrium|3|5|transition
40|Zr|Zirkonium|4|5|transition
41|Nb|Niobium|5|5|transition
42|Mo|Molibdenum|6|5|transition
43|Tc|Teknesium|7|5|transition
44|Ru|Rutenium|8|5|transition
45|Rh|Rodium|9|5|transition
46|Pd|Paladium|10|5|transition
47|Ag|Perak|11|5|transition
48|Cd|Kadmium|12|5|transition
49|In|Indium|13|5|post
50|Sn|Timah|14|5|post
51|Sb|Antimon|15|5|metalloid
52|Te|Telurium|16|5|metalloid
53|I|Iodin|17|5|halogen
54|Xe|Xenon|18|5|noble
55|Cs|Sesium|1|6|alkali
56|Ba|Barium|2|6|alkaline
57|La|Lantanum|3|8|lanthanide
58|Ce|Serium|4|8|lanthanide
59|Pr|Praseodimium|5|8|lanthanide
60|Nd|Neodimium|6|8|lanthanide
61|Pm|Prometium|7|8|lanthanide
62|Sm|Samarium|8|8|lanthanide
63|Eu|Europium|9|8|lanthanide
64|Gd|Gadolinium|10|8|lanthanide
65|Tb|Terbium|11|8|lanthanide
66|Dy|Disprosium|12|8|lanthanide
67|Ho|Holmium|13|8|lanthanide
68|Er|Erbium|14|8|lanthanide
69|Tm|Tulium|15|8|lanthanide
70|Yb|Iterbium|16|8|lanthanide
71|Lu|Lutesium|17|8|lanthanide
72|Hf|Hafnium|4|6|transition
73|Ta|Tantalum|5|6|transition
74|W|Wolfram|6|6|transition
75|Re|Renium|7|6|transition
76|Os|Osmium|8|6|transition
77|Ir|Iridium|9|6|transition
78|Pt|Platina|10|6|transition
79|Au|Emas|11|6|transition
80|Hg|Raksa|12|6|transition
81|Tl|Talium|13|6|post
82|Pb|Timbal|14|6|post
83|Bi|Bismut|15|6|post
84|Po|Polonium|16|6|post
85|At|Astatin|17|6|halogen
86|Rn|Radon|18|6|noble
87|Fr|Fransium|1|7|alkali
88|Ra|Radium|2|7|alkaline
89|Ac|Aktinium|3|9|actinide
90|Th|Torium|4|9|actinide
91|Pa|Protaktinium|5|9|actinide
92|U|Uranium|6|9|actinide
93|Np|Neptunium|7|9|actinide
94|Pu|Plutonium|8|9|actinide
95|Am|Amerisium|9|9|actinide
96|Cm|Kurium|10|9|actinide
97|Bk|Berkelium|11|9|actinide
98|Cf|Kalifornium|12|9|actinide
99|Es|Einsteinium|13|9|actinide
100|Fm|Fermium|14|9|actinide
101|Md|Mendelevium|15|9|actinide
102|No|Nobelium|16|9|actinide
103|Lr|Lawrensium|17|9|actinide
104|Rf|Rutherfordium|4|7|transition
105|Db|Dubnium|5|7|transition
106|Sg|Seaborgium|6|7|transition
107|Bh|Bohrium|7|7|transition
108|Hs|Hassium|8|7|transition
109|Mt|Meitnerium|9|7|unknown
110|Ds|Darmstadtium|10|7|unknown
111|Rg|Roentgenium|11|7|unknown
112|Cn|Kopernisium|12|7|unknown
113|Nh|Nihonium|13|7|unknown
114|Fl|Flerovium|14|7|unknown
115|Mc|Moskovium|15|7|unknown
116|Lv|Livermorium|16|7|unknown
117|Ts|Tenesin|17|7|unknown
118|Og|Oganeson|18|7|unknown
`;

const elements=raw.trim().split("\n").map(line=>{
 const [no,symbol,name,group,period,type]=line.split("|");
 return {no:+no,symbol,name,group:+group,period:+period,type};
});

const groupNames=[
"Alkali","Alkali tanah","Logam transisi","Logam transisi",
"Logam transisi","Logam transisi","Logam transisi","Logam transisi",
"Logam transisi","Logam transisi","Logam transisi","Logam transisi",
"Gol. 13","Gol. 14","Gol. 15","Gol. 16","Halogen","Gas mulia"
];

const colors={
 alkali:"Logam alkali",alkaline:"Alkali tanah",
 transition:"Logam transisi",post:"Logam pascatransisi",
 metalloid:"Metaloid",nonmetal:"Nonlogam",halogen:"Halogen",
 noble:"Gas mulia",lanthanide:"Lantanida",
 actinide:"Aktinida",unknown:"Belum diklasifikasikan"
};

function makeCell(e){
 const div=document.createElement("div");
 div.className="element "+e.type;
 div.innerHTML=`<span class="number">${e.no}</span>
 <span class="symbol">${e.symbol}</span>
 <span class="name">${e.name}</span>`;
 div.title=e.name;
 div.onclick=()=>showDetail(e);
 return div;
}

function renderTable(){
 const table=document.getElementById("periodic");
 table.innerHTML="";
 const search=document.getElementById("search").value.toLowerCase();
 const filter=document.getElementById("filter").value;

 function addBlank(){const b=document.createElement("div");b.className="blank";table.appendChild(b)}
 addBlank();

 for(let g=1;g<=18;g++){
  const label=document.createElement("div");
  label.className="group-label";
  label.textContent=g;
  label.title=groupNames[g-1];
  label.innerHTML=`<span>${g}<br><small>${groupNames[g-1]}</small></span>`;
  table.appendChild(label);
 }

 for(let p=1;p<=7;p++){
  const pl=document.createElement("div");
  pl.className="period-label";
  pl.textContent=p;
  table.appendChild(pl);

  for(let g=1;g<=18;g++){
   let e=elements.find(x=>x.period===p&&x.group===g);
   if(p===6&&g===3)e=null;
   if(p===7&&g===3)e=null;
   if(e){
    const matches=(!search||e.name.toLowerCase().includes(search)||e.symbol.toLowerCase().includes(search)||String(e.no)===search)&&(filter==="all"||e.type===filter);
    if(matches)table.appendChild(makeCell(e));
    else addBlank();
   }else addBlank();
  }
 }

 for(const period of [8,9]){
  const pl=document.createElement("div");
  pl.className="period-label";
  pl.textContent=period===8?"La":"Ac";
  table.appendChild(pl);
  for(let g=1;g<=18;g++){
   const e=elements.find(x=>x.period===period&&x.group===g);
   if(e){
    const matches=(!search||e.name.toLowerCase().includes(search)||e.symbol.toLowerCase().includes(search)||String(e.no)===search)&&(filter==="all"||e.type===filter);
    if(matches)table.appendChild(makeCell(e));
    else addBlank();
   }else addBlank();
  }
 }
}

function showDetail(e){
 document.getElementById("detail").innerHTML=`
 <h3 class="section-title">🔎 Detail Unsur</h3>
 <div class="detail-content">
  <div class="big-symbol">${e.symbol}</div>
  <div class="detail-info">
   <h2>${e.name}</h2>
   <p><b>Nomor atom:</b> ${e.no}</p>
   <p><b>Golongan:</b> ${e.group===3&&e.period>=8?"Deret f-blok":e.group}</p>
   <p><b>Periode:</b> ${e.period>=8?"Deret "+(e.period===8?"Lantanida":"Aktinida"):e.period}</p>
   <p><b>Kategori:</b> ${colors[e.type]}</p>
  </div>
 </div>`;
}

function randomElement(){
 const e=elements[Math.floor(Math.random()*elements.length)];
 showDetail(e);
 document.getElementById("detail").scrollIntoView({behavior:"smooth",block:"center"});
}

const quizData=[
 {q:"Apa simbol kimia dari Emas?",a:["Ag","Au","Fe","Cu"],c:"Au"},
 {q:"Unsur dengan nomor atom 1 adalah...",a:["Helium","Oksigen","Hidrogen","Karbon"],c:"Hidrogen"},
 {q:"Apa simbol kimia dari Besi?",a:["Fe","Be","B","F"],c:"Fe"},
 {q:"Gas mulia berada pada golongan...",a:["1","2","17","18"],c:"18"},
 {q:"Apa nama unsur dengan simbol O?",a:["Emas","Oksigen","Osmium","Oganeson"],c:"Oksigen"},
 {q:"Simbol kimia Natrium adalah...",a:["N","Na","Ni","Ne"],c:"Na"},
 {q:"Unsur dengan simbol C adalah...",a:["Kalsium","Klorin","Karbon","Tembaga"],c:"Karbon"},
 {q:"Apa nomor atom Helium?",a:["1","2","8","10"],c:"2"},
 {q:"Unsur dengan simbol Ag adalah...",a:["Emas","Perak","Argon","Aluminium"],c:"Perak"},
 {q:"Golongan 17 disebut...",a:["Gas mulia","Alkali","Halogen","Alkali tanah"],c:"Halogen"}
];

let quizIndex=0,score=0,answered=false;

function startQuiz(){
 quizIndex=0;score=0;
 document.getElementById("quizBox").style.display="block";
 showQuestion();
 document.getElementById("quizBox").scrollIntoView({behavior:"smooth",block:"center"});
}

function showQuestion(){
 answered=false;
 const q=quizData[quizIndex];
 document.getElementById("quizProgress").textContent=`Soal ${quizIndex+1} dari ${quizData.length} • Skor: ${score}`;
 document.getElementById("quizQuestion").textContent=q.q;
 document.getElementById("quizFeedback").textContent="";
 document.getElementById("nextBtn").style.display="none";
 const area=document.getElementById("answers");
 area.innerHTML="";
 q.a.forEach(answer=>{
  const btn=document.createElement("button");
  btn.textContent=answer;
  btn.onclick=()=>checkAnswer(btn,answer,q.c);
  area.appendChild(btn);
 });
}

function checkAnswer(btn,answer,correct){
 if(answered)return;
 answered=true;
 const buttons=document.querySelectorAll("#answers button");
 buttons.forEach(b=>{
  b.disabled=true;
  if(b.textContent===correct)b.classList.add("correct");
 });
 if(answer===correct){
  score++;
  document.getElementById("quizFeedback").textContent="🎉 Benar! Hebat!";
 }else{
  btn.classList.add("wrong");
  document.getElementById("quizFeedback").textContent="Belum tepat. Jawaban: "+correct;
 }
 document.getElementById("quizProgress").textContent=`Soal ${quizIndex+1} dari ${quizData.length} • Skor: ${score}`;
 document.getElementById("nextBtn").textContent=quizIndex===quizData.length-1?"Lihat Hasil":"Soal Berikutnya →";
 document.getElementById("nextBtn").style.display="inline-block";
}

function nextQuestion(){
 if(!answered)return;
 if(quizIndex<quizData.length-1){
  quizIndex++;
  showQuestion();
 }else{
  document.getElementById("quizQuestion").textContent=`Kuis selesai! Skor kamu ${score} dari ${quizData.length}.`;
  document.getElementById("answers").innerHTML="";
  document.getElementById("quizFeedback").textContent=score>=8?"🏆 Luar biasa!":"Terus berlatih, kamu pasti bisa!";
  document.getElementById("quizProgress").textContent="HASIL KUIS";
  document.getElementById("nextBtn").textContent="Ulangi Kuis";
  document.getElementById("nextBtn").onclick=startQuiz;
  answered=false;
 }
}

function makeLegend(){
 const legend=document.getElementById("legend");
 Object.entries(colors).forEach(([key,name])=>{
  const item=document.createElement("span");
  item.innerHTML=`<i class="dot ${key}"></i>${name}`;
  legend.appendChild(item);
 });
}

makeLegend();
renderTable();