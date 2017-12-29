function A(p){
    this.p = p;
}
A.prototype.f=function(){
    console.log(this.p)
}
function B(p){
    A.call(this,p);
    this.p1 = p1;
}
B.prototype = A.prototype;
