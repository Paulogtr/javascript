const cachorro = {
    raca: 'SRD',
    uivar: function(){
     console.log('O cachorro está uivando');
 },
 rosnar: function(){
     console.log('O cachorro está rosnando');
 },
 setRaca: function(raca){
    this.raca = raca;
 },
 getRaca: function(){
    return "A raça é " + this.raca
 }
};

cachorro.uivar();
cachorro.rosnar();
cachorro.setRaca('Pastor alemão');

console.log(cachorro.getRaca());

