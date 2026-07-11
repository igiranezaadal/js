function toCamelCase(str){
  if(typeof(str)=='undefined'){
        return ''
    }
  if (str==[]){
      return ''
    }
  let res=[];let change=false;upper=[]
  
  str.split('')
  for(let i of str){
    if(change==true){
      upper=i.toUpperCase()
      res.push(upper)
      change=false;
    }
    if(i=='_' || i==' '){
    change=true
    }
    else if (typeof(i)==!''){
      res.push(i)
    }
  
    
  }
  return res
  }
console.log(toCamelCase('"the_stealth_warrior"'))
console.log(toCamelCase('The-Stealth-Warrior'))
console.log(toCamelCase('A-B-C'))
console.log(toCamelCase('a_dl a'))