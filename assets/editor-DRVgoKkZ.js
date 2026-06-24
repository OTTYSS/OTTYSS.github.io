import"./modulepreload-polyfill-B5Qt9EMX.js";const s={projects:[],selectedIndex:0,activeTabId:"",rootHandle:null,queuedAssets:new Map,previewUrls:new Map,dirty:!1},d=t=>document.querySelector(t),U=d("#projectList"),g=d("#editorRoot"),E=d("#statusBox"),D=()=>({id:"NEW-GAME",title:"Новая игра",genre:"",releaseDate:"",description:"",longDescription:"",features:[],imageUrl:"/assets/NEW-GAME/cover.jpg",logoUrl:"/assets/NEW-GAME/logo.png",arcana:"I. THE MAGICIAN",downloadLink:"",progress:0,installationTabs:[{id:"pc",title:"PC",steps:[{text:"Добавьте шаг установки для PC."}]},{id:"switch",title:"Switch",steps:[{text:"Добавьте шаг установки для Switch."}]}]}),n=(t="")=>String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"),w=t=>String(t||"game").trim().replace(/[^a-z0-9-_\s]/gi,"").replace(/\s+/g,"-").toUpperCase(),p=()=>{s.dirty=!0,j()},b=()=>s.projects[s.selectedIndex],T=t=>{var e,a;(e=t.installationTabs)!=null&&e.length||(t.installationTabs=[{id:"default",title:"Общая",steps:(a=t.installationSteps)!=null&&a.length?t.installationSteps:[{text:"Добавьте шаг установки."}]}],delete t.installationSteps),t.installationTabs.forEach(i=>{i.steps||(i.steps=[])}),(!s.activeTabId||!t.installationTabs.some(i=>i.id===s.activeTabId))&&(s.activeTabId=t.installationTabs[0].id)},y=t=>s.previewUrls.get(t)||t||"",k=(t,e)=>{s.queuedAssets.set(t,e),s.previewUrls.set(t,URL.createObjectURL(e)),p()},H=async(t,e)=>{const a=await t.createWritable();await a.write(e),await a.close()},F=async(t,e,a=!1)=>{let i=t;for(const l of e)i=await i.getDirectoryHandle(l,{create:a});return i},N=async(t,e)=>{const i=t.replace(/^\/+/,"").split("/").filter(Boolean),l=i.pop(),o=await(await F(s.rootHandle,i,!0)).getFileHandle(l,{create:!0});await H(o,e)},P=async()=>{if(!window.showDirectoryPicker){alert("Ваш браузер не поддерживает прямое сохранение файлов. Откройте редактор в Chrome или Edge.");return}s.rootHandle=await window.showDirectoryPicker({mode:"readwrite"});const a=await(await(await s.rootHandle.getDirectoryHandle("data")).getFileHandle("projects.json")).getFile();s.projects=JSON.parse(await a.text()),s.selectedIndex=0,s.activeTabId="",s.dirty=!1,u()},S=async()=>{const t=await fetch("/data/projects.json",{cache:"no-store"});s.projects=await t.json(),u()},B=async()=>{if(!s.rootHandle){A();return}const e=await(await s.rootHandle.getDirectoryHandle("data",{create:!0})).getFileHandle("projects.json",{create:!0});await H(e,`${JSON.stringify(s.projects,null,2)}
`);for(const[a,i]of s.queuedAssets.entries())await N(a,i);s.queuedAssets.clear(),s.dirty=!1,j("Сохранено.")},A=()=>{const t=new Blob([`${JSON.stringify(s.projects,null,2)}
`],{type:"application/json"}),e=URL.createObjectURL(t),a=document.createElement("a");a.href=e,a.download="projects.json",a.click(),URL.revokeObjectURL(e)},j=(t="")=>{const e=s.rootHandle?"Папка проекта открыта. Можно сохранять JSON и картинки напрямую.":"Папка проекта не открыта. Можно редактировать и скачать JSON, но картинки не запишутся в assets.",a=s.queuedAssets.size?` Файлов к сохранению: ${s.queuedAssets.size}.`:"";E.textContent=`${t?`${t} `:""}${e}${s.dirty?" Есть несохранённые изменения.":""}${a}`},x=()=>{U.innerHTML=s.projects.map((t,e)=>`
            <button class="project-item ${e===s.selectedIndex?"active":""}" data-select="${e}">
              <img class="thumb" src="${n(y(t.imageUrl))}" alt="">
              <span>
                <span class="project-title">${n(t.title||t.id)}</span>
                <span class="project-id">${n(t.id)}</span>
              </span>
            </button>
          `).join("")},m=()=>{const t=b();if(!t){g.innerHTML='<div class="empty">Нет карточек. Добавьте первую игру.</div>';return}T(t);const e=t.installationTabs.find(a=>a.id===s.activeTabId)||t.installationTabs[0];d("#editorTitle").textContent=`${t.title||"Без названия"} · ${t.id||"NO-ID"}`,g.innerHTML=`
          <section class="section">
            <h2>Карточка игры</h2>
            <div class="grid">
              ${r("ID","id",t.id)}
              ${r("Название","title",t.title)}
              ${r("Аркана","arcana",t.arcana)}
              ${r("Прогресс","progress",t.progress,"number")}
              ${r("Жанр","genre",t.genre)}
              ${r("Дата релиза","releaseDate",t.releaseDate)}
              ${r("Ссылка на скачивание","downloadLink",t.downloadLink,"url",!0)}
              ${r("Краткое описание","description",t.description,"text",!0)}
              ${I("Полное описание","longDescription",t.longDescription)}
              ${I("Благодарности, по одной строке","featuresText",(t.features||[]).join(`
`))}
            </div>
          </section>

          <section class="section">
            <h2>Изображения</h2>
            <div class="grid">
              ${L("Обложка карточки","imageUrl",t.imageUrl)}
              ${L("Логотип","logoUrl",t.logoUrl||"")}
            </div>
          </section>

          <section class="section">
            <div class="toolbar" style="margin: 0 0 14px; padding: 0; border: 0; background: transparent;">
              <h2 style="margin: 0;">Инструкции</h2>
              <button class="button gold" data-action="add-tab">Добавить вкладку</button>
            </div>
            <div class="tabs">
              ${t.installationTabs.map(a=>`
                <button class="tab-button ${a.id===e.id?"active":""}" data-tab="${n(a.id)}">
                  ${n(a.title)}
                </button>
              `).join("")}
            </div>
            ${C(e)}
          </section>
        `},r=(t,e,a="",i="text",l=!1)=>`
        <div class="field ${l?"full":""}">
          <label>${t}</label>
          <input type="${i}" data-field="${e}" value="${n(a)}">
        </div>
      `,I=(t,e,a="")=>`
        <div class="field full">
          <label>${t}</label>
          <textarea data-field="${e}">${n(a)}</textarea>
        </div>
      `,L=(t,e,a="")=>`
        <div class="field">
          <label>${t}</label>
          <div class="asset-row">
            <img class="preview" src="${n(y(a))}" alt="">
            <div class="field">
              <input type="text" data-field="${e}" value="${n(a)}">
              <label class="button" style="text-align: center;">
                Выбрать файл
                <input class="hidden-file" type="file" accept="image/*" data-asset-field="${e}">
              </label>
            </div>
          </div>
        </div>
      `,C=t=>`
        <div class="tab-editor">
          <div class="grid">
            <div class="field">
              <label>ID вкладки</label>
              <input type="text" data-tab-field="id" value="${n(t.id)}">
            </div>
            <div class="field">
              <label>Название вкладки</label>
              <input type="text" data-tab-field="title" value="${n(t.title)}">
            </div>
          </div>
          <div class="row-actions" style="margin-top: 12px;">
            <button class="button" data-action="add-step">Добавить шаг</button>
            <button class="button danger" data-action="delete-tab">Удалить вкладку</button>
          </div>
          <div class="steps">
            ${t.steps.map((e,a)=>M(e,a)).join("")}
          </div>
        </div>
      `,M=(t,e)=>{var a,i;return`
        <div class="step">
          <div class="toolbar" style="margin: 0 0 12px; padding: 0; border: 0; background: transparent;">
            <strong>Шаг ${e+1}</strong>
            <button class="button danger" data-action="delete-step" data-step="${e}">Удалить шаг</button>
          </div>
          <div class="grid">
            <div class="field full">
              <label>Текст шага</label>
              <textarea data-step-field="text" data-step="${e}">${n(t.text||"")}</textarea>
            </div>
            <div class="field">
              <label>Текст кнопки</label>
              <input type="text" data-step-field="linkLabel" data-step="${e}" value="${n(((a=t.link)==null?void 0:a.label)||"")}">
            </div>
            <div class="field">
              <label>Ссылка кнопки</label>
              <input type="url" data-step-field="linkUrl" data-step="${e}" value="${n(((i=t.link)==null?void 0:i.url)||"")}">
            </div>
            ${q(e,t.imageUrl||"")}
          </div>
        </div>
      `},q=(t,e)=>`
        <div class="field full">
          <label>Картинка шага</label>
          <div class="asset-row">
            <img class="preview" src="${n(y(e))}" alt="">
            <div class="field">
              <input type="text" data-step-field="imageUrl" data-step="${t}" value="${n(e)}">
              <label class="button" style="text-align: center;">
                Выбрать файл
                <input class="hidden-file" type="file" accept="image/*" data-step-asset="${t}">
              </label>
            </div>
          </div>
        </div>
      `,u=()=>{j(),x(),m()},O=(t,e)=>{const a=b();a&&(t==="featuresText"?a.features=e.split(`
`).map(i=>i.trim()).filter(Boolean):t==="progress"?a.progress=Math.max(0,Math.min(100,Number(e)||0)):a[t]=e,t==="id"&&(s.projects[s.selectedIndex].id=w(e)),p(),x())},$=()=>{const t=b();return T(t),t.installationTabs.find(e=>e.id===s.activeTabId)||t.installationTabs[0]};g.addEventListener("input",t=>{const e=t.target;if(e.dataset.field){O(e.dataset.field,e.value);return}if(e.dataset.tabField){const a=$();a[e.dataset.tabField]=e.dataset.tabField==="id"?w(e.value).toLowerCase():e.value,s.activeTabId=a.id,p(),x();return}if(e.dataset.stepField){const i=$().steps[Number(e.dataset.step)],l=e.dataset.stepField;l==="linkLabel"||l==="linkUrl"?(i.link||(i.link={label:"",url:""}),l==="linkLabel"&&(i.link.label=e.value),l==="linkUrl"&&(i.link.url=e.value),!i.link.label&&!i.link.url&&delete i.link):i[l]=e.value,p()}});g.addEventListener("change",t=>{var o;const e=t.target,a=(o=e.files)==null?void 0:o[0];if(!a)return;const i=b(),l=w(i.id),c=a.name.replace(/[^a-z0-9._-]/gi,"-");if(e.dataset.assetField){const f=e.dataset.assetField,v=`/assets/${l}/${f==="logoUrl"?"logo":"cover"}-${c}`;i[f]=v,k(v,a),u()}if(e.dataset.stepAsset){const f=Number(e.dataset.stepAsset),v=$(),h=`/assets/${l}/${v.id}-step-${f+1}-${c}`;v.steps[f].imageUrl=h,k(h,a),u()}});g.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");if(e){s.activeTabId=e.dataset.tab,m();return}const a=t.target.closest("[data-action]");if(!a)return;const i=b();T(i);const l=$(),c=a.dataset.action;if(c==="add-tab"){const o=`tab-${i.installationTabs.length+1}`;i.installationTabs.push({id:o,title:"Новая вкладка",steps:[{text:"Добавьте шаг установки."}]}),s.activeTabId=o}c==="delete-tab"&&i.installationTabs.length>1&&(i.installationTabs=i.installationTabs.filter(o=>o.id!==l.id),s.activeTabId=i.installationTabs[0].id),c==="add-step"&&l.steps.push({text:"Новый шаг установки."}),c==="delete-step"&&l.steps.splice(Number(a.dataset.step),1),p(),m()});U.addEventListener("click",t=>{const e=t.target.closest("[data-select]");e&&(s.selectedIndex=Number(e.dataset.select),s.activeTabId="",u())});d("#addProjectButton").addEventListener("click",()=>{s.projects.push(D()),s.selectedIndex=s.projects.length-1,s.activeTabId="pc",p(),u()});d("#duplicateProjectButton").addEventListener("click",()=>{const t=structuredClone(b());t.id=`${w(t.id)}-COPY`,t.title=`${t.title} Copy`,s.projects.push(t),s.selectedIndex=s.projects.length-1,s.activeTabId="",p(),u()});d("#deleteProjectButton").addEventListener("click",()=>{b()&&confirm("Удалить выбранную карточку?")&&(s.projects.splice(s.selectedIndex,1),s.selectedIndex=Math.max(0,s.selectedIndex-1),s.activeTabId="",p(),u())});d("#openFolderButton").addEventListener("click",P);d("#saveButton").addEventListener("click",B);d("#downloadJsonButton").addEventListener("click",A);S().catch(t=>{E.textContent=`Не удалось загрузить data/projects.json: ${t.message}`});
