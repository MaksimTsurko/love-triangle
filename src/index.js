/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var kol=0; 
    for (var i=0;i<preferences.length;i++){
      var tmp1 = preferences[i]; 
      var tmp2 = preferences[tmp1-1]; 
      var tmp3 = preferences[tmp2-1]; 
      if ((tmp2-1)!=i)
      if ((tmp3-1)==i){
      kol++;
      delete preferences[i];
      delete preferences[tmp1-1];
      delete preferences[tmp2-1];
      }
    }
return kol;
};
