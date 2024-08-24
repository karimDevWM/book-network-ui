import{E as s,F as h,G as v,H as W,I as q,J as $,K as S,M as C,N as w,O as Q,V as X,W as A,X as V,Y as G,Z as Y,_ as T,aa as Z,ba as ee,c as R,ca as te,da as N,ea as O,f as x,fa as ie,g as M,ga as j,ha as oe,i as g,ia as ne,j as u,ja as P,k as E,ka as H,l as K,m as a,n as B,o as k,q as p,r as _,s as i,t as o,u as l,v as L,w as F,x as b,y as c,z as d}from"./chunk-ZXHBOSNM.js";var re=(()=>{class n{tokenService;constructor(e){this.tokenService=e}ngOnInit(){let e=document.querySelectorAll(".nav-link");e.forEach(r=>{window.location.href.endsWith(r.getAttribute("href")||"")&&r.classList.add("active"),r.addEventListener("click",()=>{e.forEach(t=>t.classList.remove("active")),r.classList.add("active")})})}getFullname(){return this.tokenService.getFullname()}logout(){localStorage.removeItem("token"),window.location.reload()}static \u0275fac=function(r){return new(r||n)(B(Z))};static \u0275cmp=x({type:n,selectors:[["app-menu"]],decls:38,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","javascript:void(0)",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["href","","aria-current","page","routerLink","/books",1,"nav-link"],[1,"fas","fa-home-alt"],["href","","aria-current","page","routerLink","my-books",1,"nav-link"],[1,"fas","fa-book"],["href","","aria-current","page","routerLink","my-waiting-list",1,"nav-link"],[1,"fas","fa-heart"],["href","","aria-current","page","routerLink","my-returned-books",1,"nav-link"],[1,"fas","fa-backward-step"],["href","","aria-current","page","routerLink","my-borrowed-books",1,"nav-link"],[1,"fas","fa-book-bookmark"],["role","search",1,"d-flex","gap-2","align-items-center"],["type","text","placeholder","Find a book","aria-label","Search",1,"form-control"],["type","submit",1,"btn","btn-outline-success"],[1,"fas","fa-search"],[1,"text-capitalize","fw-bold"],["type","button",1,"btn","btn-link",3,"click"],[1,"fas","fa-door-open"]],template:function(r,t){r&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"BSN"),o(),i(4,"button",3),l(5,"span",4),o(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),l(10,"i",9),s(11,"\xA0Home "),o()(),i(12,"li",7)(13,"a",10),l(14,"i",11),s(15,"\xA0Mybooks "),o()(),i(16,"li",7)(17,"a",12),l(18,"i",13),s(19,"\xA0My waiting list "),o()(),i(20,"li",7)(21,"a",14),l(22,"i",15),s(23,"\xA0My returned books "),o()(),i(24,"li",7)(25,"a",16),l(26,"i",17),s(27,"\xA0Borrowd books "),o()()(),i(28,"form",18),l(29,"input",19),i(30,"button",20),l(31,"i",21),o(),i(32,"span"),s(33,"Welcome"),o(),i(34,"span",22),s(35),o(),i(36,"button",23),c("click",function(){return t.logout()}),l(37,"i",24),o()()()()()),r&2&&(a(35),h(t.getFullname()))},dependencies:[V,j,N,O],styles:["li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#d6e5f1;border-radius:5px;text-decoration:underline}li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{color:#24a7e9;border-radius:5px}"]})}return n})();var ae=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=x({type:n,selectors:[["app-main"]],decls:4,vars:0,consts:[[1,"d-flex","flex-column","gap-1"],[1,"pe-2","ps-2"]],template:function(r,t){r&1&&(i(0,"div",0),l(1,"app-menu"),i(2,"div",1),l(3,"router-outlet"),o()())},dependencies:[X,re]})}return n})();var se=()=>[];function ke(n,f){n&1&&(L(0),l(1,"i",3),F())}function ve(n,f){n&1&&(L(0),l(1,"i",4),F())}function be(n,f){n&1&&(L(0),l(1,"i",5),F())}var D=(()=>{class n{rating=0;maxRating=5;get fullStars(){return Math.floor(this.rating)}get hasHalfStar(){return this.rating%1!==0}get emptyStars(){return this.maxRating-Math.ceil(this.rating)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=x({type:n,selectors:[["app-rating"]],inputs:{rating:"rating"},decls:4,vars:5,consts:[[1,"rating"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"fas","fa-star","text-warning"],[1,"fas","fa-star-half-alt","text-warning"],[1,"fas","fa-star"]],template:function(r,t){r&1&&(i(0,"div",0),k(1,ke,2,0,"ng-container",1)(2,ve,2,0,"ng-container",2)(3,be,2,0,"ng-container",1),o()),r&2&&(a(),p("ngForOf",S(3,se).constructor(t.fullStars)),a(),p("ngIf",t.hasHalfStar),a(),p("ngForOf",S(4,se).constructor(t.emptyStars)))},dependencies:[C,w]})}return n})();function he(n,f){if(n&1&&(i(0,"span",16),s(1),o()),n&2){let e=d();a(),v(" ",e.book.rate," ")}}function xe(n,f){if(n&1){let e=b();i(0,"div",12)(1,"i",17),c("click",function(){g(e);let t=d();return u(t.onShowDetails())}),o(),i(2,"i",18),c("click",function(){g(e);let t=d();return u(t.onBorrow())}),o(),i(3,"i",19),c("click",function(){g(e);let t=d();return u(t.onAddToWaitingList())}),o()()}}function Be(n,f){if(n&1){let e=b();i(0,"div",12)(1,"i",20),c("click",function(){g(e);let t=d();return u(t.onEdit())}),o(),i(2,"i",21),c("click",function(){g(e);let t=d();return u(t.onShare())}),o(),i(3,"i",22),c("click",function(){g(e);let t=d();return u(t.onArchive())}),o()()}}var z=(()=>{class n{_book={};_manage=!1;_bookCover;get book(){return this._book}set book(e){this._book=e}get manage(){return this._manage}set manage(e){this._manage=e}get bookCover(){return this._book.cover?"data:image/jpg;base64, "+this._book.cover:"https://cdn.pixabay.com/photo/2014/01/21/13/27/letter-249080_1280.jpg"}share=new E;archive=new E;edit=new E;addToWaitingList=new E;borrow=new E;showDetails=new E;onArchive(){this.archive.emit(this._book)}onShare(){this.share.emit(this._book)}onEdit(){this.edit.emit(this._book)}onAddToWaitingList(){this.addToWaitingList.emit(this._book)}onBorrow(){this.borrow.emit(this._book)}onShowDetails(){this.showDetails.emit(this._book)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=x({type:n,selectors:[["app-book-card"]],inputs:{book:"book",manage:"manage"},outputs:{share:"share",archive:"archive",edit:"edit",addToWaitingList:"addToWaitingList",borrow:"borrow",showDetails:"showDetails"},decls:24,vars:14,consts:[[1,"card","border-2",2,"width","20rem"],["height","200","alt","...",1,"card-img-top",3,"src"],[1,"card-body","overflow-scroll"],[1,"car-title","fs-6","text-nowrap","fw-bold","mb-1"],[1,"fa-solid","fa-book"],[1,"car-subtitle","fs-6","text-secondary","mb-1"],[1,"fa-solid","fa-user-check"],[1,"fa-solid","fa-code"],[1,"car-subtitle","fs-6","text-secondary"],[1,"fa-solid","fa-user"],[1,"card-text"],[1,"card-footer","d-flex","gap-2","justify-content-between","align-items-center"],[1,"d-flex","gap-2"],[3,"rating"],["class","fw-bold",4,"ngIf"],["class","d-flex gap-2",4,"ngIf"],[1,"fw-bold"],[1,"fas","fa-circle-info","text-primary",3,"click"],[1,"fas","fa-list-check","text-primary",3,"click"],[1,"fas","fa-heart","text-danger",3,"click"],[1,"fas","fa-edit","text-success",3,"click"],[1,"fas","fa-share-nodes","text-primary",3,"click"],[1,"fas","fa-archive","text-danger",3,"click"]],template:function(r,t){r&1&&(i(0,"div",0),l(1,"img",1),i(2,"div",2)(3,"h5",3),l(4,"i",4),s(5),o(),i(6,"h5",5),l(7,"i",6),s(8),o(),i(9,"h6",5),l(10,"i",7),s(11),o(),i(12,"h6",8),l(13,"i",9),s(14),o(),l(15,"hr"),i(16,"p",10),s(17),o()(),i(18,"div",11)(19,"div",12),l(20,"app-rating",13),k(21,he,2,1,"span",14),o(),k(22,xe,4,0,"div",15)(23,Be,4,0,"div",15),o()()),r&2&&(_("border-success",t.book.shareable)("border-warning",t.book.archived),a(),p("src",t.bookCover,K),a(4),v("\xA0",t.book.title," "),a(3),v("\xA0",t.book.authorName," "),a(3),v("\xA0",t.book.isbn," "),a(3),v("\xA0",t.book.owner," "),a(3),h(t.book.synopsis),a(3),p("rating",t.book.rate||0),a(),p("ngIf",t.book.rate||!1),a(),p("ngIf",!t.manage),a(),p("ngIf",t.manage))},dependencies:[w,D],styles:["i[_ngcontent-%COMP%]{cursor:pointer}div.card[_ngcontent-%COMP%]{max-height:450px;min-height:450px}"]})}return n})();var Ce=()=>[];function we(n,f){if(n&1&&(i(0,"div",13),s(1),o()),n&2){let e=d();_("alert-danger",e.level==="error")("alert-success",e.level==="success"),a(),v(" ",e.message," ")}}function Se(n,f){if(n&1){let e=b();i(0,"app-book-card",14),c("borrow",function(t){g(e);let m=d();return u(m.borrowBook(t))}),o()}if(n&2){let e=f.$implicit;p("book",e)}}function ye(n,f){if(n&1){let e=b();i(0,"li",15)(1,"a",7),c("click",function(){let t=g(e).index,m=d();return u(m.goToPage(t))}),s(2),o()()}if(n&2){let e=f.index,r=d();a(),_("active",r.page==e),a(),v(" ",e+1," ")}}var de=(()=>{class n{bookService;router;bookResponse={};size=4;page=0;constructor(e,r){this.bookService=e,this.router=r}message="";level="success";borrowBook(e){this.message="",this.bookService.borrowBook({"book-id":e.id}).subscribe({next:()=>{this.level="success",this.message="Book successfully added to your list"},error:r=>{console.log(r),this.level="error",this.message=r.error.error}})}goToNextPage(){this.page++,this.findAllBooks()}goToLastPage(){this.page=this.bookResponse.totalPages-1,this.findAllBooks()}goToPage(e){this.page=e,this.findAllBooks()}goToFirstPage(){this.page=0,this.findAllBooks()}goToPreviousPage(){this.page--,this.findAllBooks()}ngOnInit(){this.findAllBooks()}findAllBooks(){this.bookService.findBooks({size:this.size,page:this.page}).subscribe({next:e=>{this.bookResponse=e}})}get isLastPage(){return this.page==this.bookResponse.totalPages-1}static \u0275fac=function(r){return new(r||n)(B(T),B(A))};static \u0275cmp=x({type:n,selectors:[["app-book-list"]],decls:22,vars:12,consts:[["class","alert",3,"alert-danger","alert-success",4,"ngIf"],[1,"d-flex","justify-content-start","gap-2","flex-wrap"],[3,"book","borrow",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation example"],[1,"pagination"],[1,"Page-item"],["href","javascript:void(0)","aria-label","Previous",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-chevron-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],[1,"alert"],[3,"borrow","book"],[1,"page-item"]],template:function(r,t){r&1&&(i(0,"h3"),s(1,"Books list"),o(),k(2,we,2,5,"div",0),l(3,"hr"),i(4,"div",1),k(5,Se,1,1,"app-book-card",2),o(),i(6,"div",3)(7,"nav",4)(8,"ul",5)(9,"li",6)(10,"a",7),c("click",function(){return t.goToFirstPage()}),l(11,"i",8),o()(),i(12,"li",6)(13,"a",7),c("click",function(){return t.goToPreviousPage()}),l(14,"i",9),o()(),k(15,ye,3,3,"li",10),i(16,"li",6)(17,"a",7),c("click",function(){return t.goToNextPage()}),l(18,"i",11),o()(),i(19,"li",6)(20,"a",7),c("click",function(){return t.goToLastPage()}),l(21,"i",12),o()()()()()),r&2&&(a(2),p("ngIf",t.message),a(3),p("ngForOf",t.bookResponse.content),a(5),_("disabled",t.page==0),a(3),_("disabled",t.page==0),a(2),p("ngForOf",S(11,Ce).constructor(t.bookResponse.totalPages)),a(2),_("disabled",t.isLastPage),a(3),_("disabled",t.isLastPage))},dependencies:[C,w,z]})}return n})();var Te=()=>[];function Pe(n,f){if(n&1){let e=b();i(0,"app-book-card",15),c("archive",function(t){g(e);let m=d();return u(m.archiveBook(t))})("share",function(t){g(e);let m=d();return u(m.shareBook(t))})("edit",function(t){g(e);let m=d();return u(m.editBook(t))}),o()}if(n&2){let e=f.$implicit;p("book",e)("manage",!0)}}function Ee(n,f){if(n&1){let e=b();i(0,"li",16)(1,"a",9),c("click",function(){let t=g(e).index,m=d();return u(m.goToPage(t))}),s(2),o()()}if(n&2){let e=f.index,r=d();a(),_("active",r.page==e),a(),v(" ",e+1," ")}}var me=(()=>{class n{bookService;router;bookResponse={};size=4;page=0;constructor(e,r){this.bookService=e,this.router=r}editBook(e){this.router.navigate(["books","manage",e.id])}shareBook(e){this.bookService.updateShareableStatus({"book-id":e.id}).subscribe({next:()=>{e.shareable=!e.shareable}})}archiveBook(e){this.bookService.updateArchivedStatus({"book-id":e.id}).subscribe({next:()=>{e.archived=!e.archived}})}goToNextPage(){this.page++,this.findAllBooks()}goToLastPage(){this.page=this.bookResponse.totalPages-1,this.findAllBooks()}goToPage(e){this.page=e,this.findAllBooks()}goToFirstPage(){this.page=0,this.findAllBooks()}goToPreviousPage(){this.page--,this.findAllBooks()}ngOnInit(){this.findAllBooks()}findAllBooks(){this.bookService.findAllBooksByOwner({size:this.size,page:this.page}).subscribe({next:e=>{this.bookResponse=e}})}get isLastPage(){return this.page===this.bookResponse.totalPages-1}static \u0275fac=function(r){return new(r||n)(B(T),B(A))};static \u0275cmp=x({type:n,selectors:[["app-my-books"]],decls:25,vars:11,consts:[[1,"d-flex","justify-content-end","mb-3"],["routerLink","/books/manage",1,"btn","btn-outline-primary"],[1,"fas","fa-plus"],[1,"d-flex","justify-content-start","gap-2","flex-wrap"],[3,"book","manage","archive","share","edit",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation example"],[1,"pagination"],[1,"Page-item"],["href","javascript:void(0)","aria-label","Previous",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-chevron-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],[3,"archive","share","edit","book","manage"],[1,"page-item"]],template:function(r,t){r&1&&(i(0,"h3"),s(1,"My books list"),o(),l(2,"hr"),i(3,"div",0)(4,"a",1),l(5,"i",2),s(6,"\xA0 New book "),o()(),i(7,"div",3),k(8,Pe,1,2,"app-book-card",4),o(),i(9,"div",5)(10,"nav",6)(11,"ul",7)(12,"li",8)(13,"a",9),c("click",function(){return t.goToFirstPage()}),l(14,"i",10),o()(),i(15,"li",8)(16,"a",9),c("click",function(){return t.goToPreviousPage()}),l(17,"i",11),o()(),k(18,Ee,3,3,"li",12),i(19,"li",8)(20,"a",9),c("click",function(){return t.goToNextPage()}),l(21,"i",13),o()(),i(22,"li",8)(23,"a",9),c("click",function(){return t.goToLastPage()}),l(24,"i",14),o()()()()()),r&2&&(a(8),p("ngForOf",t.bookResponse.content),a(5),_("disabled",t.page==0),a(3),_("disabled",t.page==0),a(2),p("ngForOf",S(10,Te).constructor(t.bookResponse.totalPages)),a(2),_("disabled",t.isLastPage),a(3),_("disabled",t.isLastPage))},dependencies:[C,V,z]})}return n})();var Ie=()=>[];function Re(n,f){if(n&1){let e=b();i(0,"div",2)(1,"h2"),s(2,"Return and share feedback"),o(),i(3,"div",3)(4,"div",4)(5,"div",5)(6,"strong"),s(7,"Title"),o()(),i(8,"div",6),s(9),o()(),i(10,"div",4)(11,"div",5)(12,"strong"),s(13,"Author"),o()(),i(14,"div",6),s(15),o()(),i(16,"div",4)(17,"div",5)(18,"strong"),s(19,"ISBN"),o()(),i(20,"div",6),s(21),o()(),i(22,"div",4)(23,"div",5)(24,"strong"),s(25,"Rate"),o()(),i(26,"div",6),s(27),o()()(),l(28,"hr"),i(29,"div",7)(30,"form",8)(31,"div",9)(32,"input",10),$("ngModelChange",function(t){g(e);let m=d();return q(m.feedbackRequest.note,t)||(m.feedbackRequest.note=t),u(t)}),o(),l(33,"app-rating",11),s(34),o(),i(35,"div",7)(36,"label",12),s(37,"Comment"),o(),i(38,"textarea",13),$("ngModelChange",function(t){g(e);let m=d();return q(m.feedbackRequest.comment,t)||(m.feedbackRequest.comment=t),u(t)}),s(39,"                "),o()(),i(40,"div",14)(41,"button",15),c("click",function(){g(e);let t=d();return u(t.returnBook(t.withFeedback=!0))}),l(42,"i",16),s(43,"\xA0Rate the book & Return "),o(),i(44,"button",17),c("click",function(){g(e);let t=d();return u(t.returnBook(t.withFeedback=!1))}),l(45,"i",18),s(46,"\xA0Just Return "),o(),i(47,"button",19),c("click",function(){g(e);let t=d();return u(t.selectedBook=void 0)}),l(48,"i",20),s(49,"\xA0Cancel "),o()()()()()}if(n&2){let e=d();a(9),v(" ",e.selectedBook.title," "),a(6),v(" ",e.selectedBook.authorName," "),a(6),v(" ",e.selectedBook.isbn," "),a(6),v(" ",e.selectedBook.rate," "),a(5),W("ngModel",e.feedbackRequest.note),a(),p("rating",e.feedbackRequest.note||0),a(),v(" ",e.feedbackRequest.note," "),a(4),W("ngModel",e.feedbackRequest.comment)}}function Me(n,f){n&1&&l(0,"i",41)}function Le(n,f){if(n&1){let e=b();i(0,"i",42),c("click",function(){g(e);let t=d().$implicit,m=d(2);return u(m.returnBorrowedBook(t))}),o()}}function Fe(n,f){if(n&1&&(i(0,"tr")(1,"th",35),s(2),o(),i(3,"td"),s(4),o(),i(5,"td"),s(6),o(),i(7,"td"),s(8),o(),i(9,"td"),l(10,"i",36),s(11),o(),i(12,"td")(13,"div",37),k(14,Me,1,0,"i",38)(15,Le,1,0,"i",39),l(16,"i",40),o()()()),n&2){let e=f.$implicit,r=f.index;a(2),h(r+1),a(2),h(e.title),a(2),h(e.authorName),a(2),h(e.isbn),a(3),h(e.rate),a(3),p("ngIf",e.returned),a(),p("ngIf",!e.returned),a(),_("text-success",e.returnApproved)}}function Ae(n,f){if(n&1){let e=b();i(0,"li",43)(1,"a",29),c("click",function(){let t=g(e).index,m=d(2);return u(m.goToPage(t))}),s(2),o()()}if(n&2){let e=f.index,r=d(2);a(),_("active",r.page==e),a(),v(" ",e+1," ")}}function Ve(n,f){if(n&1){let e=b();i(0,"div")(1,"table",21)(2,"thead")(3,"tr")(4,"th",22),s(5,"#"),o(),i(6,"th",22),s(7,"Title"),o(),i(8,"th",22),s(9,"Author"),o(),i(10,"th",22),s(11,"ISBN"),o(),i(12,"th",22),s(13,"Rate"),o(),i(14,"th",22),l(15,"i",23),o()()(),i(16,"tbody"),k(17,Fe,17,9,"tr",24),o()(),i(18,"div",25)(19,"nav",26)(20,"ul",27)(21,"li",28)(22,"a",29),c("click",function(){g(e);let t=d();return u(t.goToFirstPage())}),l(23,"i",30),o()(),i(24,"li",28)(25,"a",29),c("click",function(){g(e);let t=d();return u(t.goToPreviousPage())}),l(26,"i",31),o()(),k(27,Ae,3,3,"li",32),i(28,"li",28)(29,"a",29),c("click",function(){g(e);let t=d();return u(t.goToNextPage())}),l(30,"i",33),o()(),i(31,"li",28)(32,"a",29),c("click",function(){g(e);let t=d();return u(t.goToLastPage())}),l(33,"i",34),o()()()()()()}if(n&2){let e=d();a(17),p("ngForOf",e.borrowedBooks.content),a(5),_("disabled",e.page==0),a(3),_("disabled",e.page==0),a(2),p("ngForOf",S(10,Ie).constructor(e.borrowedBooks.totalPages)),a(2),_("disabled",e.isLastPage),a(3),_("disabled",e.isLastPage)}}var pe=(()=>{class n{bookservice;feedbackService;borrowedBooks={};page=0;size=5;selectedBook=void 0;feedbackRequest={bookId:0,comment:"",note:0};withFeedback;constructor(e,r){this.bookservice=e,this.feedbackService=r}ngOnInit(){this.findAllBorrowedBooks()}returnBook(e){this.bookservice.returnBorrowedBook({"book-id":this.selectedBook?.id}).subscribe({next:()=>{e&&this.giveFeedback(),this.selectedBook=void 0,this.findAllBorrowedBooks()}})}giveFeedback(){this.feedbackService.saveFeedback({body:this.feedbackRequest}).subscribe({next:()=>{}})}findAllBorrowedBooks(){this.bookservice.findAllBorrowedBooks({page:this.page,size:this.size}).subscribe({next:e=>{this.borrowedBooks=e}})}returnBorrowedBook(e){this.selectedBook=e,this.feedbackRequest.bookId=e.id}goToNextPage(){this.page++,this.findAllBorrowedBooks()}goToLastPage(){this.page=this.borrowedBooks.totalPages-1,this.findAllBorrowedBooks()}goToPage(e){this.page=e,this.findAllBorrowedBooks()}goToFirstPage(){this.page=0,this.findAllBorrowedBooks()}goToPreviousPage(){this.page--,this.findAllBorrowedBooks()}get isLastPage(){return this.page===this.borrowedBooks.totalPages-1}static \u0275fac=function(r){return new(r||n)(B(T),B(Y))};static \u0275cmp=x({type:n,selectors:[["app-borrowed-book-list"]],decls:5,vars:2,consts:[["class","d-flex flex-column col-6",4,"ngIf"],[4,"ngIf"],[1,"d-flex","flex-column","col-6"],[1,"d-flex","flex-column","col-12"],[1,"d-flex"],[1,"col-1"],[1,"col-11"],[1,"col-12"],[1,"row","g-3"],[1,"d-flex","gap-3"],["type","range","id","rate","name","rate","min","0","max","5","step","0.5",1,"form-range","w-25",3,"ngModelChange","ngModel"],[3,"rating"],["for","comment",1,"form-label"],["name","comment","id","comment","rows","4","placeholder","comment...",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-end","gap-2","col-12"],["type","submit",1,"btn","btn-outline-primary",3,"click"],[1,"fas","fa-save"],["type","submit",1,"btn","btn-outline-success",3,"click"],[1,"fa-solid","fa-paper-plane"],["type","submit",1,"btn","btn-link","btn","text-danger",3,"click"],[1,"fas","fa-times"],[1,"table"],["scope","col"],[1,"fas","fa-cogs"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation example"],[1,"pagination"],[1,"Page-item"],["href","javascript:void(0)","aria-label","Previous",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-chevron-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],["scope","row"],[1,"fas","fa-star","text-warning"],[1,"d-flex","gap-2"],["class","cursor-pointer fa-regular fa-paper-plane text-primary",4,"ngIf"],["class","cursor-pointer fa-solid fa-paper-plane text-success",3,"click",4,"ngIf"],[1,"cursor-pointer","fa-solid","fa-circle-check"],[1,"cursor-pointer","fa-regular","fa-paper-plane","text-primary"],[1,"cursor-pointer","fa-solid","fa-paper-plane","text-success",3,"click"],[1,"page-item"]],template:function(r,t){r&1&&(i(0,"h2"),s(1,"My borrowed books"),o(),l(2,"hr"),k(3,Re,50,8,"div",0)(4,Ve,34,11,"div",1)),r&2&&(a(3),p("ngIf",t.selectedBook),a(),p("ngIf",!t.selectedBook))},dependencies:[C,w,j,ee,oe,te,N,ie,O,D]})}return n})();function Ne(n,f){if(n&1&&(i(0,"div",16)(1,"p"),s(2),o()()),n&2){let e=d();_("alert-danger",e.level==="error")("alert-success",e.level==="success"),a(2),h(e.message)}}function Oe(n,f){n&1&&l(0,"i",23)}function je(n,f){n&1&&l(0,"i",24)}function De(n,f){if(n&1){let e=b();i(0,"tr")(1,"th",17),s(2),o(),i(3,"td"),s(4),o(),i(5,"td"),s(6),o(),i(7,"td"),s(8),o(),i(9,"td"),l(10,"i",18),s(11),o(),i(12,"td")(13,"div",19),k(14,Oe,1,0,"i",20)(15,je,1,0,"i",21),i(16,"i",22),c("click",function(){let t=g(e).$implicit,m=d();return u(m.approveBookReturn(t))}),o()()()()}if(n&2){let e=f.$implicit,r=f.index;a(2),h(r+1),a(2),h(e.title),a(2),h(e.authorName),a(2),h(e.isbn),a(3),v(" ",e.rate,""),a(3),p("ngIf",e.returned),a(),p("ngIf",!e.returned),a(),_("text-success",e.returnApproved)}}function ze(n,f){if(n&1){let e=b();i(0,"li",8)(1,"a",25),c("click",function(){let t=g(e).$implicit,m=d();return u(m.gotToPage(t))}),s(2),o()()}if(n&2){let e=f.$implicit,r=d();a(),_("active",r.page===e),a(),h(e+1)}}var fe=(()=>{class n{bookService;page=0;size=5;pages=[];returnedBooks={};message="";level="success";constructor(e){this.bookService=e}ngOnInit(){this.findAllReturnedBooks()}findAllReturnedBooks(){this.bookService.findAllRetunededBooks({page:this.page,size:this.size}).subscribe({next:e=>{this.returnedBooks=e,this.pages=Array(this.returnedBooks.totalPages).fill(0).map((r,t)=>t)}})}gotToPage(e){this.page=e,this.findAllReturnedBooks()}goToFirstPage(){this.page=0,this.findAllReturnedBooks()}goToPreviousPage(){this.page--,this.findAllReturnedBooks()}goToLastPage(){this.page=this.returnedBooks.totalPages-1,this.findAllReturnedBooks()}goToNextPage(){this.page++,this.findAllReturnedBooks()}get isLastPage(){return this.page===this.returnedBooks.totalPages-1}approveBookReturn(e){e.returned&&this.bookService.approveReturnBorrowedBook({"book-id":e.id}).subscribe({next:()=>{this.level="success",this.message="Book return approved",this.findAllReturnedBooks()}})}static \u0275fac=function(r){return new(r||n)(B(T))};static \u0275cmp=x({type:n,selectors:[["app-return-books"]],decls:38,vars:11,consts:[["class","alert ","role","alert",3,"alert-danger","alert-success",4,"ngIf"],[1,"table"],["scope","col"],[1,"fas","fa-cogs"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["href","javascript:void(0)","aria-label","Previous",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angle-left"],["class","page-item",4,"ngFor","ngForOf"],["href","javascript:void(0)","aria-label","Next",1,"page-link",3,"click"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],["role","alert",1,"alert"],["scope","row"],[1,"fas","fa-star","text-warning"],[1,"d-flex","gap-2"],["class","fa-regular fa-paper-plane text-primary",4,"ngIf"],["class","fa-solid fa-paper-plane text-success",4,"ngIf"],[1,"fa-solid","fa-circle-check",3,"click"],[1,"fa-regular","fa-paper-plane","text-primary"],[1,"fa-solid","fa-paper-plane","text-success"],["href","javascript:void(0)",1,"page-link",3,"click"]],template:function(r,t){r&1&&(i(0,"h2"),s(1,"My returned books"),o(),l(2,"hr"),k(3,Ne,3,5,"div",0),i(4,"div")(5,"table",1)(6,"thead")(7,"tr")(8,"th",2),s(9,"#"),o(),i(10,"th",2),s(11,"Title"),o(),i(12,"th",2),s(13,"Author"),o(),i(14,"th",2),s(15,"ISBN"),o(),i(16,"th",2),s(17,"Rate"),o(),i(18,"th",2),l(19,"i",3),o()()(),i(20,"tbody"),k(21,De,17,9,"tr",4),o()(),i(22,"div",5)(23,"nav",6)(24,"ul",7)(25,"li",8)(26,"a",9),c("click",function(){return t.goToFirstPage()}),l(27,"i",10),o()(),i(28,"li",8)(29,"a",9),c("click",function(){return t.goToPreviousPage()}),l(30,"i",11),o()(),k(31,ze,3,3,"li",12),i(32,"li",8)(33,"a",13),c("click",function(){return t.goToNextPage()}),l(34,"i",14),o()(),i(35,"li",8)(36,"a",13),c("click",function(){return t.goToLastPage()}),l(37,"i",15),o()()()()()()),r&2&&(a(3),p("ngIf",t.message),a(18),p("ngForOf",t.returnedBooks.content),a(5),_("disabled",t.page===0),a(3),_("disabled",t.page===0),a(2),p("ngForOf",t.pages),a(2),_("disabled",t.isLastPage),a(3),_("disabled",t.isLastPage))},dependencies:[C,w]})}return n})();var We=[{path:"",component:ae,canActivate:[P],children:[{path:"",component:de,canActivate:[P]},{path:"my-books",component:me,canActivate:[P]},{path:"manage",component:H,canActivate:[P]},{path:"manage/:bookId",component:H,canActivate:[P]},{path:"my-borrowed-books",component:pe,canActivate:[P]},{path:"my-returned-books",component:fe,canActivate:[P]}]}],ge=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=M({type:n});static \u0275inj=R({imports:[G.forChild(We),G]})}return n})();var Tt=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=M({type:n});static \u0275inj=R({imports:[Q,ge,ne]})}return n})();export{Tt as BookModule};
