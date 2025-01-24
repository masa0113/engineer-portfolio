(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{7549:(e,r,t)=>{Promise.resolve().then(t.bind(t,1534))},1534:(e,r,t)=>{"use strict";t.d(r,{default:()=>_});var s=t(5155),n=t(2115),a=t(2863),o=t(2679),i=t(9606),l=t(3415),d=t(3312),c=t(2317),m=t(1567),u=t(6195);let f=(0,t(1027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(u.b,{ref:r,className:(0,m.cn)(f(),t),...n})});x.displayName=u.b.displayName;let p=i.Op,h=n.createContext({}),b=e=>{let{...r}=e;return(0,s.jsx)(h.Provider,{value:{name:r.name},children:(0,s.jsx)(i.xI,{...r})})},g=()=>{let e=n.useContext(h),r=n.useContext(v),{getFieldState:t,formState:s}=(0,i.xW)(),a=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},v=n.createContext({}),j=n.forwardRef((e,r)=>{let{className:t,...a}=e,o=n.useId();return(0,s.jsx)(v.Provider,{value:{id:o},children:(0,s.jsx)("div",{ref:r,className:(0,m.cn)("space-y-2",t),...a})})});j.displayName="FormItem";let y=n.forwardRef((e,r)=>{let{className:t,...n}=e,{error:a,formItemId:o}=g();return(0,s.jsx)(x,{ref:r,className:(0,m.cn)(a&&"text-destructive",t),htmlFor:o,...n})});y.displayName="FormLabel";let w=n.forwardRef((e,r)=>{let{...t}=e,{error:n,formItemId:a,formDescriptionId:o,formMessageId:i}=g();return(0,s.jsx)(c.DX,{ref:r,id:a,"aria-describedby":n?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!n,...t})});w.displayName="FormControl",n.forwardRef((e,r)=>{let{className:t,...n}=e,{formDescriptionId:a}=g();return(0,s.jsx)("p",{ref:r,id:a,className:(0,m.cn)("text-[0.8rem] text-muted-foreground",t),...n})}).displayName="FormDescription";let N=n.forwardRef((e,r)=>{let{className:t,children:n,...a}=e,{error:o,formMessageId:i}=g(),l=o?String(null==o?void 0:o.message):n;return l?(0,s.jsx)("p",{ref:r,id:i,className:(0,m.cn)("text-[0.8rem] font-medium text-destructive",t),...a,children:l}):null});N.displayName="FormMessage";let F=n.forwardRef((e,r)=>{let{className:t,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,m.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...a})});F.displayName="Input";let I=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)("textarea",{className:(0,m.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...n})});I.displayName="Textarea";let R=l.Ik({name:l.Yj().min(2,{message:"名前は2文字以上必要です"}),email:l.Yj().email({message:"有効なメールアドレスを入力してください"}),message:l.Yj().min(10,{message:"メッセージは10文字以上必要です"})});function _(){let[e,r]=(0,n.useState)(!1),t=(0,i.mN)({resolver:(0,o.u)(R),defaultValues:{name:"",email:"",message:""}});async function l(e){r(!0);try{await new Promise(e=>setTimeout(e,1500)),t.reset()}catch(e){}finally{r(!1)}}return(0,s.jsxs)(a.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"container mx-auto px-4 py-8 max-w-md",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold text-center mb-12",children:"お問い合わせ"}),(0,s.jsx)(p,{...t,children:(0,s.jsxs)("form",{onSubmit:t.handleSubmit(l),className:"space-y-6",children:[(0,s.jsx)(b,{control:t.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)(y,{children:"お名前"}),(0,s.jsx)(w,{children:(0,s.jsx)(F,{placeholder:"お名前を入力",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(b,{control:t.control,name:"email",render:e=>{let{field:r}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)(y,{children:"メールアドレス"}),(0,s.jsx)(w,{children:(0,s.jsx)(F,{placeholder:"メールアドレスを入力",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(b,{control:t.control,name:"message",render:e=>{let{field:r}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)(y,{children:"メッセージ"}),(0,s.jsx)(w,{children:(0,s.jsx)(I,{placeholder:"メッセージを入力",className:"resize-none",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(d.$,{type:"submit",className:"w-full",disabled:e,children:e?"送信中...":"送信"})]})})]})}},3312:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var s=t(5155),n=t(2115),a=t(2317),o=t(1027),i=t(1567);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:o,asChild:d=!1,...c}=e,m=d?a.DX:"button";return(0,s.jsx)(m,{className:(0,i.cn)(l({variant:n,size:o,className:t})),ref:r,...c})});d.displayName="Button"},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var s=t(3463),n=t(9795);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[579,518,441,517,358],()=>r(7549)),_N_E=e.O()}]);