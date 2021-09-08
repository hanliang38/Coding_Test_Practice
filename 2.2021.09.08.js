function solution(scores) {
    let result = '';
    
    function rank(score){
        if(score >= 90)
            return "A";
        else if(score >= 80)
            return "B";
        else if(score >= 70)
            return "C";
        else if(score >= 50)
            return "D";
        else
            return "F";
    }
    
    for(let j = 0; j < scores.length; j++){
        let self = scores[j][j];
        let count = scores.length;
        
        let min = 101;
        let max = -1;
        
        let grade = 0;
        let include = true;
        
        for(let i = 0; i < scores.length; i++){
            let score = scores[i][j];
            
            if( i != j && self == score ){
                include = false;
            }
            
            min = Math.min(min, score);
            max = Math.max(max, score);
            
            grade += score;
        }
        
        if( include && (min == self || max == self) ){
            count--;
            grade -= self;
        }
        
        result += rank(grade / count);
    }
    
    return result;
}