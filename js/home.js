const projects = {
eight:{title:'Eight Miles High',role:'Editor',year:'2026',context:'SCAD Student Capstone Film',image:'eight-miles-high',alt:'Blue-lit close-up from Eight Miles High',credits:{Director:'Caleb Wade'},video:'https://vimeo.com/1197379983/6c73ec4542',watch:'Watch showcase cut on Vimeo'},
history:{title:'Historical Figures of Savannah: Ep 1',role:'Editor',year:'2026',context:'SCAD Student Capstone Film',image:'historical-figures',alt:'A hand writing with a quill',description:"Explore Savannah's history through three of its historical icons: James Oglethorpe, Juliette Gordon Low, and Johnny Mercer. Their stories delve into their respective times of war, and how they overcame them and shaped Georgia's future.",credits:{Director:'Beatriz Santos',Producer:'Andrew Haggerty'},video:'https://www.youtube.com/watch?v=M2Ga1ViwKT0'},
last:{title:'Last Call',role:'Editor',year:'2025',context:'SCAD Student Film',image:'last-call',alt:'Last Call promotional artwork',description:"A newly hired bartender's nerves skyrocket when he learns that not only does he have to close alone for the first time, but there may also be a murderer on the loose.",credits:{Director:'Jake Seymour',Producers:'Maura Reeves and Griffin Kozikowski'}},
authentic:{title:'Authentic',role:'Editor',year:'2024',context:'Film 240 Project',image:'authentic',alt:'A chef in conversation in Authentic',video:'https://www.youtube.com/watch?v=J2Sy6hN1emY'},
sins:{title:'Sins of the Father',role:'Assistant Editor',year:'2024',context:'SCAD Student Film',image:'sins-of-the-father',alt:'Illustrated Sins of the Father poster',credits:{'Writer / Director':"Nelson O'Neill",Producers:'Charlie Gottlieb and Ally Bernabe',Editor:'JJ Zink'}},
tick:{title:'Tick Tock',role:'Writer / Director / DP / Editor',year:'2023',context:'Student Film Project',image:'tick-tock',alt:'Tick Tock alarm-clock title graphic',video:'https://www.youtube.com/watch?v=qjJnAA8K19A'},
red:{image:'red-string',alt:'Red String poster',title:'Red String',role:'2nd Assistant Camera',year:'2025',context:'SCAD Senior Capstone Film',credits:{Director:'Ally Bernabe',Producer:'Autumn Bishop'}},
purity:{image:'purity-project',alt:'The Purity Project promotional artwork',title:'The Purity Project',role:'2nd Assistant Camera',year:'2025'},
sleight:{title:'Sleight of Hand',role:'DIT',year:'2025',context:'SCAD Student Film',description:'A fame-obsessed magician must evade suspicion after killing a fellow performer and having the body discovered by her colleagues.',credits:{Director:'Rodrigo Sacca',Producers:'Ally Bernabe and JJ Zink',Writer:'Patience Rozier'}},
mouth:{image:'one-less-mouth',alt:'One Less Mouth to Feed poster',title:'One Less Mouth to Feed',role:'Sound Utility',context:"SCAD Master's Film",description:'Alice desperately searches for a shapeshifting fairy haunting her woods in hopes it will bring good fortune to their family.',credits:{Director:'Brynn Lilley',Producer:'Hadley Holyoak'},video:'https://www.youtube.com/watch?v=S2fcd7ori3E'},
kink:{image:'kinkshame',alt:'A person at a laptop in Kinkshame',title:'Kinkshame',role:'Sound Mixer',year:'2024',context:'SCAD Student Film',credits:{Director:'Tyler Simmons',Producer:'Emma Eastham'},video:'https://www.youtube.com/watch?v=IAiPEDSCEGI'}
};
const dialog=document.getElementById('project-dialog');let opener;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
const project=projects[button.dataset.project];if(!project)return;opener=button;
document.getElementById('project-title').textContent=project.title;
document.getElementById('project-role').textContent=project.role+(project.year?' · '+project.year:'');
document.getElementById('project-context').textContent=project.context||'';
document.getElementById('project-description').textContent=project.description||'';
const media=document.getElementById('project-media');media.replaceChildren();
if(project.image){const img=document.createElement('img');img.src='assets/img/'+project.image+'.jpg';img.alt=project.alt;media.append(img);}
const credits=document.getElementById('project-credits');credits.replaceChildren();
Object.entries(project.credits||{}).forEach(([role,name])=>{const dt=document.createElement('dt');dt.textContent=role;const dd=document.createElement('dd');dd.textContent=name;credits.append(dt,dd);});
const video=document.getElementById('project-video');video.replaceChildren();
if(project.video){const link=document.createElement('a');link.href=project.video;link.target='_blank';link.rel='noopener noreferrer';link.className='watch-link';link.textContent=project.watch||'Watch film on YouTube';video.append(link);}
dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
}));
document.getElementById('close-project').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus();});
document.getElementById('year').textContent=new Date().getFullYear();
