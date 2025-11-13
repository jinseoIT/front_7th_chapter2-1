var e=function(exports){function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}function n(e,n){if(t(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||`default`);if(t(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(n===`string`?String:Number)(e)}function r(e){var r=n(e,`string`);return t(r)==`symbol`?r:r+``}function i(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}return exports.defineProperty=i,exports}({});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const t=`modulepreload`,n=function(e){return`/front_7th_chapter2-1/`+e},r={},i=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=e(i.map(e=>{if(e=n(e,a),e in r)return;r[e]=!0;let i=e.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let t=s.length-1;t>=0;t--){let n=s[t];if(n.href===e&&(!i||n.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:t,i||(u.as=`script`),u.crossOrigin=``,u.href=e,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((t,n)=>{u.addEventListener(`load`,t),u.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${e}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;s(e.reason)}return e().catch(s)})},a=`/front_7th_chapter2-1`;var o=class{constructor(t,n){e.defineProperty(this,`$target`,void 0),e.defineProperty(this,`$props`,void 0),e.defineProperty(this,`state`,{}),e.defineProperty(this,`$mounted`,!1),e.defineProperty(this,`$eventListeners`,[]),e.defineProperty(this,`$childComponents`,[]),this.$target=t,this.$props=n,this.didMount(),this.setup(),this.setEvent(),this.render(),this.$mounted||(this.$mounted=!0,this.mounted())}initState(){return{}}setup(){this.state=this.initState()}didMount(){}mounted(){}updated(){}template(){return``}render(){this.$target.innerHTML=this.template(),this.updated()}setEvent(){}setState(e){this.state={...this.state,...e},this.render()}addEvent(e,t,n){let r=e=>e.target.closest(t)?n(e):!1;this.$target.addEventListener(e,r),this.$eventListeners.push({eventType:e,handler:r})}addChildComponent(e){e&&this.$childComponents.push(e)}unmount(){this.$childComponents.forEach(e=>{e&&typeof e.unmount==`function`&&e.unmount()}),this.$childComponents=[],this.$eventListeners.forEach(({eventType:e,handler:t})=>{this.$target.removeEventListener(e,t)}),this.$eventListeners=[],this.$target.innerHTML=``,this.$mounted=!1}},s=o,c=class extends s{template(){let{categories:e,filters:t,pagination:n}=this.$props,{category1:r,category2:i,search:a}=t,{limit:o}=n,[s,c]=[Object.keys(e),Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Object.keys(t)]))];return`
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">
            <div class="relative">
              <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${a||``}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <div class="flex items-center gap-2" id="category_container">
                <label class="text-sm text-gray-600">카테고리:</label>
                <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
                ${r&&`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb=${r} data-category1=${r} class="text-xs hover:text-blue-800 hover:underline">${r}</button>`}
                ${i&&`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${i}</span>`}
              </div>
            <div>
              <!-- 1depth 카테고리 -->
              <div class="flex flex-wrap gap-2" id="filter_category1">
                ${r?``:s.map(e=>`<button data-category1=${e} class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                    bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                    ${e}
                  </button>`).join(``)}
              </div>
              <!-- 2depth 카테고리 -->
                <div class="flex flex-wrap gap-2" id="filter_category2">
                  ${c[r]?c[r].map(e=>`<button
                            data-category1="생활/건강"
                            data-category2=${e}
                            class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${e===i?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
                          >
                            ${e}
                          </button>`).join(``):``}
                </div>
            </div>
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="10" ${o===10?`selected`:``}>
                    10개
                  </option>
                  <option value="20" ${o===20?`selected`:``}>
                    20개
                  </option>
                  <option value="50" ${o===50?`selected`:``}>
                    50개
                  </option>
                  <option value="100" ${o===100?`selected`:``}>
                    100개
                  </option>
                </select>
              </div>
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="price_asc" ${t.sort===`price_asc`?`selected`:``}>가격 낮은순</option>
                  <option value="price_desc" ${t.sort===`price_desc`?`selected`:``}>가격 높은순</option>
                  <option value="name_asc" ${t.sort===`name_asc`?`selected`:``}>이름순</option>
                  <option value="name_desc" ${t.sort===`name_desc`?`selected`:``}>이름 역순</option>
                </select>
              </div>
            </div>
          </div>
        </div>`}},l=c,u=class{constructor(e={}){this.state=e,this.subscribers=new Set}getState(){return{...this.state}}setState(e){let t={...this.state};this.state={...this.state,...e},this.notify(t,this.state)}subscribe(e){if(typeof e!=`function`)throw Error(`Store.subscribe: callback must be a function`);return this.subscribers.add(e),()=>{this.unsubscribe(e)}}unsubscribe(e){this.subscribers.delete(e)}notify(e,t){this.subscribers.forEach(n=>{try{n(t,e)}catch(e){console.error(`Store subscriber error:`,e)}})}reset(e={}){let t={...this.state};this.state={...e},this.notify(t,this.state)}},d=u,f=class extends d{constructor(){super({search:``,category1:``,category2:``,sort:`price_asc`,page:1,limit:20}),this.initFromURL()}initFromURL(){let e=new URLSearchParams(window.location.search),t=e.get(`search`)||``,n=e.get(`category1`)||``,r=e.get(`category2`)||``,i=e.get(`sort`)||`price_asc`,a=parseInt(e.get(`page`)||`1`,10),o=parseInt(e.get(`limit`)||`20`,10);this.setState({search:t,category1:n,category2:r,sort:i,page:a,limit:o})}syncToURL(){let e=new URLSearchParams,{search:t,category1:n,category2:r,sort:i,page:a,limit:o}=this.state;t&&e.set(`search`,t),n&&e.set(`category1`,n),r&&e.set(`category2`,r),i!==`price_asc`&&e.set(`sort`,i),a!==1&&e.set(`page`,a.toString()),o!==20&&e.set(`limit`,o.toString());let s=`${window.location.pathname}${e.toString()?`?${e.toString()}`:``}`;window.history.pushState({},``,s)}setSearch(e){this.setState({search:e,page:1}),this.syncToURL()}setCategory1(e){this.setState({category1:e,category2:``,page:1}),this.syncToURL()}setCategory2(e){this.setState({category2:e,page:1}),this.syncToURL()}setSort(e){this.setState({sort:e,page:1}),this.syncToURL()}setPage(e){this.setState({page:e}),this.syncToURL()}setLimit(e){this.setState({limit:e,page:1}),this.syncToURL()}resetFilters(){this.setState({search:``,category1:``,category2:``,sort:`price_asc`,page:1,limit:20}),this.syncToURL()}getSearchParams(){let{search:e,category1:t,category2:n,sort:r,page:i,limit:a}=this.state;return{search:e,category1:t,category2:n,sort:r,page:i,limit:a}}};const ee=new f;var p=class e extends d{constructor(){let t=e.loadFromStorage();super({items:t.items||[],totalCount:t.totalCount||0,totalPrice:t.totalPrice||0,isOpen:!1}),this.calculateTotals()}static loadFromStorage(){try{let e=localStorage.getItem(`shopping_cart`);if(e)return JSON.parse(e)}catch(e){console.error(`Failed to load cart from localStorage:`,e)}return{items:[],totalCount:0,totalPrice:0}}saveToStorage(){try{let{items:e,totalCount:t,totalPrice:n}=this.state;localStorage.setItem(`shopping_cart`,JSON.stringify({items:e,totalCount:t,totalPrice:n}))}catch(e){console.error(`Failed to save cart to localStorage:`,e)}}calculateTotals(){let e=this.state.items||[],t=e.length,n=e.reduce((e,t)=>e+(t.price||0)*(t.quantity||0),0);this.setState({totalCount:t,totalPrice:n}),this.saveToStorage()}addItem(e,t=1){let n=[...this.state.items||[]],r=n.findIndex(t=>t.productId===e.productId);r>=0?n[r].quantity+=t:n.push({productId:e.productId,title:e.title,image:e.image,price:Number(e.lprice),quantity:t}),this.setState({items:n}),this.calculateTotals()}removeItem(e){let t=(this.state.items||[]).filter(t=>t.productId!==e);this.setState({items:t}),this.calculateTotals()}updateQuantity(e,t){if(t<=0){this.removeItem(e);return}let n=(this.state.items||[]).map(n=>n.productId===e?{...n,quantity:t}:n);this.setState({items:n}),this.calculateTotals()}removeSelected(e){let t=(this.state.items||[]).filter(t=>!e.includes(t.productId));this.setState({items:t}),this.calculateTotals()}clearCart(){this.setState({items:[],totalCount:0,totalPrice:0}),this.saveToStorage()}hasItem(e){return(this.state.items||[]).some(t=>t.productId===e)}getItemQuantity(e){let t=(this.state.items||[]).find(t=>t.productId===e);return t?t.quantity:0}openCart(){this.setState({isOpen:!0})}closeCart(){this.setState({isOpen:!1})}toggleCart(){this.setState({isOpen:!this.state.isOpen})}};const m=new p;var h=class extends s{template(){let{product:e}=this.$props;return`
     <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" data-product-id=${e.productId}>
        <!-- 상품 이미지 -->
        <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
          <img src="${e.image}"
               alt="${e.title}"
               class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
               loading="lazy">
        </div>
        <!-- 상품 정보 -->
        <div class="p-3">
          <div class="cursor-pointer product-info mb-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              ${e.title}
            </h3>
            <p class="text-xs text-gray-500 mb-2">${e.brand||``}</p>
            <p class="text-lg font-bold text-gray-900">
              ${Number(e.lprice).toLocaleString()}원
            </p>
          </div>
          <!-- 장바구니 버튼 -->
          <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                 hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
            장바구니 담기
          </button>
        </div>
      </div>`}setEvent(){this.addEvent(`click`,`.add-to-cart-btn`,e=>{var t;e.stopPropagation();let n=(t=e.target.closest(`.add-to-cart-btn`))?.dataset.productId;if(!n)return;let{product:r}=this.$props;if(r&&r.productId===n){m.addItem(r,1);let e=new CustomEvent(`cart:item-added`,{detail:{product:r}});document.dispatchEvent(e)}})}},g=h;async function _(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function v(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function y(){let e=await fetch(`/api/categories`);return await e.json()}const b={products:[],categories:{},isLoading:!0,isLoadingMore:!1,error:null,pagination:{page:1,limit:20,total:0,totalPages:1,hasNext:!1,hasPrev:!1}},x=`
  <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">
            <div class="relative">
              <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">카테고리:</label>
                <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
              </div>
              <!-- 1depth 카테고리 -->
              <div class="flex flex-wrap gap-2">
                <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
              </div>
              <!-- 2depth 카테고리 -->
            </div>
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select id="limit-select"
                        class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="10">
                    10개
                  </option>
                  <option value="20" selected="">
                    20개
                  </option>
                  <option value="50">
                    50개
                  </option>
                  <option value="100">
                    100개
                  </option>
                </select>
              </div>
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="price_asc" selected="">가격 낮은순</option>
                  <option value="price_desc">가격 높은순</option>
                  <option value="name_asc">이름순</option>
                  <option value="name_desc">이름 역순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              <!-- 로딩 스켈레톤 -->
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            
            <div class="text-center py-4">
              <div class="inline-flex items-center">
                <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
              </div>
            </div>
          </div>
        </div>
`;var S=class extends s{getInitState(){let e={...b},t=new URLSearchParams(window.location.search),n=t.get(`search`)||``,r=t.get(`category1`)||``,i=t.get(`category2`)||``,a=t.get(`sort`)||`price_asc`,o=Number(t.get(`limit`))||20,s=Number(t.get(`page`))||1,c={search:n,category1:r,category2:i,sort:a};return e.pagination.limit=o,e.pagination.page=s,{...e,filters:c}}template(){let{pagination:e}=this.state;return`
      <main class="max-w-md mx-auto px-4 py-4 pt-[88px]">
      ${this.state.isLoading?x:`
        <section class="search_filter"></section>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${e?.total||0}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            </div>
            ${this.state.isLoadingMore?`<div class="text-center py-4">
              <div class="inline-flex items-center">
                <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
              </div>
            </div>
              `:``}

            <!-- 무한 스크롤 감시 대상 -->
            <div id="observer-target" class="h-10"></div>
            
            ${this.state.pagination.hasNext?``:`<div class="text-center py-4 text-sm text-gray-500" id="end-message" style="display: none;">
              모든 상품을 확인했습니다
            </div>
          </div>`}
        </div>
        `}
        
      </main>
  `}didMount(){this.state={...b}}setup(){this.observer=null,this.asyncFetchData()}async asyncFetchData(){let{pagination:e,filters:t}=this.getInitState(),n={page:e.page,limit:e.limit,search:t.search,category1:t.category1,category2:t.category2,sort:t.sort},[r,i]=await Promise.all([_(n),y()]);this.setState({isLoading:!1,pagination:r.pagination,products:r.products,categories:i,filters:t,searchParams:n}),this.setupObserver()}mountProductCards(){var e;let t=this.$target.querySelector(`#products-grid`);if(!t)return;let n=this.$childComponents.filter(e=>e instanceof g);n.forEach(e=>{e.unmount&&e.unmount()}),this.$childComponents=this.$childComponents.filter(e=>!(e instanceof g)),(e=this.state)==null||(e=e.products)==null||e.forEach(e=>{let n=document.createElement(`article`);t.appendChild(n);let r=new g(n,{product:e});this.addChildComponent(r)})}updated(){let e=this.$target.querySelector(`.search_filter`);if(e&&!e.hasChildNodes()){let t=new l(e,this.state);this.addChildComponent(t)}this.mountProductCards(),this.setupObserver()}setEvent(){this.addEvent(`click`,`#products-grid`,e=>{let t=e.target.closest(`[data-product-id]`);if(!t)return;let n=t.dataset.productId;this.goProductPage(n)}),this.addEvent(`click`,`#filter_category1`,e=>{let t=e.target.closest(`[data-category1]`);if(!t)return;let n=t.dataset.category1;this.updateURL({category1:n,category2:``,page:1}),this.handlesearch({category1:n})}),this.addEvent(`click`,`#filter_category2`,e=>{let t=e.target.closest(`[data-category2]`);if(!t)return;let n=t.dataset.category2;this.updateURL({category2:n,page:1}),this.handlesearch({category2:n})}),this.addEvent(`click`,`#category_container`,e=>{let t=e.target.closest(`[data-breadcrumb]`);if(!t)return;let n=t.dataset.breadcrumb;if(n===`reset`){this.updateURL({category1:``,category2:``,page:1}),this.handlesearch({category1:``,category2:``});return}this.updateURL({category1:n,category2:``,page:1}),this.handlesearch({category1:n,category2:``})}),this.addEvent(`change`,`#limit-select`,e=>{let t=e.target.closest(`#limit-select`)||e.target;if(!t||t.id!==`limit-select`)return;let n=Number(t.value);this.updateURL({limit:n,page:1}),this.handlesearch({limit:n})}),this.addEvent(`change`,`#sort-select`,e=>{let t=e.target.closest(`#sort-select`)||e.target;if(!t)return;let n=t.value;this.updateURL({sort:n,page:1}),this.handlesearch({sort:n})}),this.addEvent(`keydown`,`#search-input`,e=>{if(e.key!==`Enter`)return;let t=e.target.closest(`#search-input`)||e.target;if(!t)return;let n=t.value;this.updateURL({search:n,page:1}),this.handlesearch({search:n})})}async handlesearch(e){let t={...e,page:1};this.getProducts(t,!0)}async getProducts(e,t=!1){let n={...this.state.searchParams,...e},r=await _(n),i=t?r.products:[...this.state.products||[],...r.products],a={...r,products:i,searchParams:n};this.setState(a)}async loadNextPage(){var e,t;if(this.state.isLoadingMore||!(e=this.state.pagination)?.hasNext)return;this.setState({isLoadingMore:!0});let n=((t=this.state.pagination)?.page||1)+1;this.updateURL({page:n}),await this.getProducts({page:n},!1),this.setState({isLoadingMore:!1})}setupObserver(){var e;if(this.observer&&(this.observer.disconnect(),this.observer=null),!(e=this.state.pagination)?.hasNext)return;let t=this.$target.querySelector(`#observer-target`);t&&(this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&this.loadNextPage()})},{root:null,rootMargin:`0px`,threshold:.3}),this.observer.observe(t))}updateURL(e){let{filters:t={},pagination:n={}}=this.state,r=new URLSearchParams,i=e.search===void 0?t.search:e.search,a=e.category1===void 0?t.category1:e.category1,o=e.category2===void 0?t.category2:e.category2,s=e.sort===void 0?t.sort||`price_asc`:e.sort,c=e.page===void 0?n.page||1:e.page,l=e.limit===void 0?n.limit||20:e.limit;i&&r.set(`search`,i),a&&r.set(`category1`,a),o&&r.set(`category2`,o),s!==`price_asc`&&r.set(`sort`,s),c!==1&&r.set(`page`,c.toString()),e.limit===void 0?l!==20&&r.set(`limit`,l.toString()):r.set(`limit`,l.toString());let u=`${window.location.pathname}${r.toString()?`?${r.toString()}`:``}`;window.history.pushState({},``,u)}goProductPage(e){Q(`/product/${e}`,{productId:e,products:this.state.products})}unmount(){this.observer&&(this.observer.disconnect(),this.observer=null),super.unmount()}},C=S;const w=()=>`<footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>`;var T=w,E=class extends s{initState(){return{totalCount:m.getState().totalCount||0}}setup(){super.setup();let e=m.getState();this.state.totalCount=e.totalCount||0,this.unsubscribe=m.subscribe(e=>{this.setState({totalCount:e.totalCount})})}template(){let{totalCount:e}=this.state;return`<header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
            ${e>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">${e}</span>`:``}
          </button>
        </div>
      </div>
    </div>
  </header>`}setEvent(){this.addEvent(`click`,`#cart-icon-btn`,()=>{m.openCart()})}unmount(){this.unsubscribe&&this.unsubscribe(),super.unmount()}},D=E,O=class extends s{initState(){return{isOpen:m.getState().isOpen,items:m.getState().items||[],totalCount:m.getState().totalCount||0,totalPrice:m.getState().totalPrice||0,selectedItems:new Set}}setup(){this.state.selectedItems||(this.state.selectedItems=new Set),this.unsubscribe=m.subscribe(e=>{let t=new Set((e.items||[]).map(e=>e.productId)),n=new Set(Array.from(this.state.selectedItems||[]).filter(e=>t.has(e)));this.setState({isOpen:e.isOpen,items:e.items,totalCount:e.totalCount,totalPrice:e.totalPrice,selectedItems:n})})}template(){let{isOpen:e,items:t,totalPrice:n,totalCount:r,selectedItems:i=new Set}=this.state,a=t&&t.length>0,o=i.size||0,s=a&&o===t.length;return`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal" style="display: ${e?`block`:`none`}">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            ${a?`
              <!-- 전체 선택 섹션 -->
              <div class="p-4 border-b border-gray-200 bg-gray-50">
              <label class="flex items-center text-sm text-gray-700">
                <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${s?`checked`:``}>
                전체선택 (${r}개)
              </label>
          </div>
            <!-- 장바구니 아이템 목록 -->
            <div class="flex-1 overflow-y-auto p-4">
              <div class="space-y-4">
                ${t.map(e=>`
                <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
                 <!-- 선택 체크박스 -->
                  <label class="flex items-center mr-3">
                    <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
                  focus:ring-blue-500" data-product-id="${e.productId}" ${i.has(e.productId)?`checked`:``}>
                  </label>
                  <!-- 상품 이미지 -->
                  <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
                  </div>
                  <!-- 상품 정보 -->
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium text-gray-900 truncate">${e.title}</h4>
                    <p class="text-sm text-gray-600 mt-1">${Number(e.price).toLocaleString()}원</p>
                    <!-- 수량 조절 -->
                    <div class="flex items-center mt-2">
                      <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                      </button>
                      <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" data-product-id="${e.productId}">
                      <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <!-- 가격 및 삭제 -->
                  <div class="text-right ml-3">
                    <p class="text-sm font-medium text-gray-900">${Number(e.price*e.quantity).toLocaleString()}원</p>
                    <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">삭제</button>
                  </div>
                </div>
                `).join(``)}
              </div>
            </div>
            <!-- 하단 액션 -->
            <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-bold text-gray-900">총 금액</span>
                <span class="text-xl font-bold text-blue-600">${Number(n).toLocaleString()}원</span>
              </div>
              <div class="space-y-2">
                ${o>0?`
                <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                       hover:bg-red-700 transition-colors text-sm">
                  선택한 상품 삭제 (${o}개)
                </button>
                `:``}
                <div class="flex gap-2">
                  <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                    전체 비우기
                  </button>
                  <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                    구매하기
                  </button>
                </div>
              </div>
            </div>
            `:`
            <!-- 빈 장바구니 -->
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
            `}
          </div>
        </div>
      </div>
    </div>`}setEvent(){this.addEvent(`click`,`#cart-modal-close-btn`,()=>{m.closeCart()}),this.addEvent(`click`,`.cart-modal-overlay`,()=>{m.closeCart()}),this.handleEscKey=e=>{e.key===`Escape`&&this.state.isOpen&&m.closeCart()},document.addEventListener(`keydown`,this.handleEscKey),this.addEvent(`click`,`.quantity-decrease-btn`,e=>{var t;let n=(t=e.target.closest(`[data-product-id]`))?.dataset.productId;if(!n)return;let r=this.state.items.find(e=>e.productId===n);r&&m.updateQuantity(n,r.quantity-1)}),this.addEvent(`click`,`.quantity-increase-btn`,e=>{var t;let n=(t=e.target.closest(`[data-product-id]`))?.dataset.productId;if(!n)return;let r=this.state.items.find(e=>e.productId===n);r&&m.updateQuantity(n,r.quantity+1)}),this.addEvent(`change`,`.quantity-input`,e=>{let t=e.target.dataset.productId,n=parseInt(e.target.value,10);t&&n>0&&m.updateQuantity(t,n)}),this.addEvent(`click`,`.cart-item-remove-btn`,e=>{let t=e.target.dataset.productId;if(t){m.removeItem(t);let e=new CustomEvent(`cart:item-removed`,{detail:{productId:t}});document.dispatchEvent(e)}}),this.addEvent(`change`,`#cart-modal-select-all-checkbox`,e=>{let t=e.target.checked,n=new Set;t&&this.state.items.forEach(e=>{n.add(e.productId)}),this.setState({selectedItems:n})}),this.addEvent(`change`,`.cart-item-checkbox`,e=>{let t=e.target.dataset.productId,n=e.target.checked,r=new Set(this.state.selectedItems);n?r.add(t):r.delete(t),this.setState({selectedItems:r})}),this.addEvent(`click`,`#cart-modal-remove-selected-btn`,()=>{let e=Array.from(this.state.selectedItems);if(e.length>0){m.removeSelected(e),this.setState({selectedItems:new Set});let t=new CustomEvent(`cart:item-removed`,{detail:{productIds:e}});document.dispatchEvent(t)}}),this.addEvent(`click`,`#cart-modal-clear-cart-btn`,()=>{m.clearCart(),this.setState({selectedItems:new Set});let e=new CustomEvent(`cart:item-removed`,{detail:{cleared:!0}});document.dispatchEvent(e)})}unmount(){this.handleEscKey&&document.removeEventListener(`keydown`,this.handleEscKey),this.unsubscribe&&this.unsubscribe(),super.unmount()}},k=O,A=class extends s{template(){let{status:e=`success`,text:t=`축하합니다`}=this.$props||{},n={success:{bgColor:`bg-green-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`},info:{bgColor:`bg-blue-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`},error:{bgColor:`bg-red-600`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`}},r=n[e]||n.success;return t?`
      <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 toast-message">
        <div class="${r.bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm animate-slide-down">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${r.icon}
            </svg>
          </div>
          <p class="text-sm font-medium">${t}</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    `:``}setEvent(){this.addEvent(`click`,`#toast-close-btn`,()=>{this.hide()})}hide(){let e=this.$target.querySelector(`.toast-message`);e&&(e.style.display=`none`)}},j=A,M=class extends s{template(){return`
    <header class="header-container"></header>
    <section class="product_list"></section>
    <section class="cart-container"></section>
    <section class="toast-container"></section>
    ${T()}
    `}setup(){this.unsubscribe=m.subscribe(e=>{this.updateCartModal(e.isOpen)}),this.observeCartButtonClick()}observeCartButtonClick(){this.cartButtonClickHandler=()=>{this.showToast(`success`,`장바구니에 추가되었습니다`)},this.cartItemRemovedHandler=()=>{this.showToast(`info`,`선택된 상품들이 삭제되었습니다`)},document.addEventListener(`cart:item-added`,this.cartButtonClickHandler),document.addEventListener(`cart:item-removed`,this.cartItemRemovedHandler)}mounted(){let e=this.$target.querySelector(`.header-container`),t=this.$target.querySelector(`.product_list`),n=this.$target.querySelector(`.cart-container`),r=this.$target.querySelector(`.toast-container`);if(e){let t=new D(e);this.addChildComponent(t)}if(t){let e=new C(t);this.addChildComponent(e)}if(n){let e=new k(n);this.addChildComponent(e),this.updateCartModal(m.getState().isOpen)}if(r){let e=new j(r,{status:null,text:``});this.addChildComponent(e),this.toastComponent=e}}updateCartModal(e){let t=this.$target.querySelector(`.cart-modal`);t&&(t.style.display=e?`block`:`none`)}showToast(e,t){if(this.toastComponent){this.toastComponent.$props={status:e,text:t},this.toastComponent.render();let n=this.toastComponent.$target.querySelector(`.toast-message`);n&&(n.style.display=`block`),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.hideToast()},3e3)}}hideToast(){this.toastComponent&&this.toastComponent.hide&&this.toastComponent.hide()}unmount(){this.toastTimer&&clearTimeout(this.toastTimer),this.unsubscribe&&this.unsubscribe(),this.cartButtonClickHandler&&document.removeEventListener(`cart:item-added`,this.cartButtonClickHandler),this.cartItemRemovedHandler&&document.removeEventListener(`cart:item-removed`,this.cartItemRemovedHandler),super.unmount()}},N=M;const P=()=>window.location.pathname,F=e=>{let t=P();return t.split(e)[1]};var I=class extends s{initState(){return{totalCount:m.getState().totalCount||0}}setup(){super.setup();let e=m.getState();this.state.totalCount=e.totalCount||0,this.unsubscribe=m.subscribe(e=>{this.setState({totalCount:e.totalCount})})}template(){let{totalCount:e}=this.state;return`<header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                ${e>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">${e}</span>`:``}
              </button>
            </div>
          </div>
        </div>
      </header>`}setEvent(){this.addEvent(`click`,`#cart-icon-btn`,()=>{m.openCart()})}unmount(){this.unsubscribe&&this.unsubscribe(),super.unmount()}},L=I,R=class extends s{initState(){return{loading:!0,quantity:1}}didMount(){window.scrollTo(0,0)}template(){let{loading:e,product:t}=this.state;return e||!t?`
      <header class="header-container"></header>
      <div class="min-h-screen bg-gray-50">
      <main class="max-w-md mx-auto px-4 py-4 pt-[88px]">
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      </main>
    </div>
    <section class="cart-container"></section>
    <section class="toast-container"></section>
    ${T()}
      `:`
    <header class="header-container"></header>
    <div class="min-h-screen bg-gray-50">
      <main class="max-w-md mx-auto px-4 py-4 pt-[88px]">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1="생활/건강">
              생활/건강
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2="생활용품">
              생활용품
            </button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src=${t.image} alt=${t.title} class="w-full h-full object-cover product-detail-image">
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${t.description}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span class="ml-2 text-sm text-gray-600">4.0 (749개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${Number(t.lprice).toLocaleString()}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${t.stock}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${t.description}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="${this.state.quantity||1}" min="1" max="${t?.stock||107}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${t?.productId||``}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              ${this.state.relatedProducts.map(e=>`
                <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
              </div>
                `).join(``)}
            </div>
          </div>
        </div>
      </main>
    </div>
    <section class="cart-container"></section>
    <section class="toast-container"></section>
    ${T()}
    `}async fetchData(){var e;let t=(e=this.$props)?.productId||F(`/product/`),n=await v(t);return n}setup(){this.unsubscribe=m.subscribe(e=>{this.updateCartModal(e.isOpen)}),this.observeCartButtonClick()}observeCartButtonClick(){this.cartButtonClickHandler=()=>{this.showToast(`success`,`장바구니에 추가되었습니다`)},this.cartItemRemovedHandler=()=>{this.showToast(`info`,`선택된 상품들이 삭제되었습니다`)},document.addEventListener(`cart:item-added`,this.cartButtonClickHandler),document.addEventListener(`cart:item-removed`,this.cartItemRemovedHandler)}async mounted(){let e=this.$target.querySelector(`.header-container`);if(e){let t=new L(e);this.addChildComponent(t),this.headerComponent=t}let t=this.$target.querySelector(`.cart-container`);if(t){let e=new k(t);this.addChildComponent(e),this.cartComponent=e,this.updateCartModal(m.getState().isOpen)}let n=this.$target.querySelector(`.toast-container`);if(n){let e=new j(n,{status:null,text:``});this.addChildComponent(e),this.toastComponent=e}let r=await this.fetchData(),i=await this.getRelatedProducts(r.category1);this.setState({product:r,relatedProducts:i,loading:!1})}async getRelatedProducts(e){var t;if((t=this.$props)?.products)return this.$props.products.filter(e=>{var t;return e.productId!==(t=this.$props)?.productId}).slice(0,2);let n=await _({page:1,limit:3,category1:e});return n.products.slice(0,2)}updateCartModal(e){let t=this.$target.querySelector(`.cart-modal`);t&&(t.style.display=e?`block`:`none`)}showToast(e,t){if(this.toastComponent){this.toastComponent.$props={status:e,text:t},this.toastComponent.render();let n=this.toastComponent.$target.querySelector(`.toast-message`);n&&(n.style.display=`block`),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.hideToast()},3e3)}}hideToast(){this.toastComponent&&this.toastComponent.hide&&this.toastComponent.hide()}updated(){let e=this.$target.querySelector(`.header-container`);if(e&&(!this.headerComponent||!e.contains(this.headerComponent.$target))){if(this.headerComponent){this.headerComponent.unmount();let e=this.$childComponents.indexOf(this.headerComponent);e>-1&&this.$childComponents.splice(e,1)}let t=new L(e);this.addChildComponent(t),this.headerComponent=t}let t=this.$target.querySelector(`.cart-container`);if(t&&(!this.cartComponent||!t.contains(this.cartComponent.$target))){if(this.cartComponent){this.cartComponent.unmount();let e=this.$childComponents.indexOf(this.cartComponent);e>-1&&this.$childComponents.splice(e,1)}let e=new k(t);this.addChildComponent(e),this.cartComponent=e}let n=this.$target.querySelector(`.toast-container`);if(n&&(!this.toastComponent||!n.contains(this.toastComponent.$target))){if(this.toastComponent){this.toastComponent.unmount();let e=this.$childComponents.indexOf(this.toastComponent);e>-1&&this.$childComponents.splice(e,1)}let e=new j(n,{status:null,text:``});this.addChildComponent(e),this.toastComponent=e}}setEvent(){this.addEvent(`click`,`#quantity-decrease`,()=>{let e=this.state.quantity||1;e>1&&this.setState({quantity:e-1})}),this.addEvent(`click`,`#quantity-increase`,()=>{let{product:e}=this.state,t=e?.stock||107,n=this.state.quantity||1;n<t&&this.setState({quantity:n+1})}),this.addEvent(`change`,`#quantity-input`,e=>{let{product:t}=this.state,n=t?.stock||107,r=parseInt(e.target.value,10);r&&r>0&&r<=n?this.setState({quantity:r}):e.target.value=this.state.quantity||1}),this.addEvent(`click`,`#add-to-cart-btn`,()=>{let{product:e,quantity:t}=this.state;if(!e)return;m.addItem(e,t||1);let n=new CustomEvent(`cart:item-added`,{detail:{product:e}});document.dispatchEvent(n)}),this.addEvent(`click`,`.go-to-product-list`,()=>{Q(`/`)}),this.addEvent(`click`,`.related-product-card`,e=>{var t;let n=(t=e.target.closest(`.related-product-card`))?.dataset.productId;n&&this.goProductPage(n)})}unmount(){this.toastTimer&&clearTimeout(this.toastTimer),this.unsubscribe&&this.unsubscribe(),this.cartButtonClickHandler&&document.removeEventListener(`cart:item-added`,this.cartButtonClickHandler),this.cartItemRemovedHandler&&document.removeEventListener(`cart:item-removed`,this.cartItemRemovedHandler),super.unmount()}goProductPage(e){Q(`/product/${e}`,{productId:e})}},z=R,B=class extends s{template(){return`
  <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>`}},V=B;const H=document.querySelector(`#root`);let U=null;const W=[{path:`/`,component:N},{path:`/product/:id`,component:z}],G=e=>{if(a&&e.startsWith(a)){let t=e.slice(a.length)||`/`;return t.startsWith(`/`)?t:`/${t}`}return e||`/`},K=e=>RegExp(`^${e.replace(/\//g,`\\/`).replace(/:\w+/g,`(.+)`)}$`),q=e=>(e.match(/:\w+/g)||[]).map(e=>e.slice(1)),J=(e,t)=>e.reduce((e,n,r)=>(e[n]=t[r+1],e),{}),Y=(e,t)=>{let n=K(e.path),r=t.match(n);if(!r)return null;let i=q(e.path),a=J(i,r);return{route:e,isMatch:r,params:a}},X=e=>{let t=W.map(t=>Y(t,e)).find(e=>e!==null);return t||null},Z=(e,t)=>{let n=G(e);U&&typeof U.unmount==`function`&&U.unmount();let r=X(n),i=t||r?.params||{},a=r?new r.route.component(H,i):new V(H);return U=a,a},Q=(e,t)=>{let n=e.startsWith(`/`)?e:`/${e}`,r=`${a}${n}`;if(window.location.pathname!==e)return window.history.pushState({},``,window.location.origin+r),Z(r,t)},$=()=>{window.addEventListener(`popstate`,()=>Z(window.location.pathname));let e=window.location.pathname;Z(e)},te=()=>i(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`${a}/mockServiceWorker.js`}}));function ne(){$()}te().then(ne);