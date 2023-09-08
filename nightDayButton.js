let coloring={
    nightDay:function(self,coloring1,coloring2){
        [targetBody,targetAllBorder]=[document.querySelector('body'),document.querySelectorAll('.border')]
        
        let refh1=document.querySelector('h1');
        let borderList=['#grid','#survey','.uni',refh1]
        let gridlist=document.querySelector('#grid');
        let linklist=document.querySelectorAll('a');

        if(self.value==="야간모드"){
            targetBody.style.backgroundColor=coloring1;
            targetBody.style.color=coloring2;
            gridlist.style.backgroundColor=coloring1;
            
            for(let i=0,i<linklist.length,i++){
                linklist[i].style.color=coloring2;
            }
                              
            self.value="주간모드";
        }
        else if(self.value==="주간모드"){
         
            targetBody.style.backgroundColor=coloring2;
            targetBody.style.color=coloring1;  
            gridlist.style.backgroundColor=coloring2;
            gridlist.style.color=coloring1;    
            self.value='야간모드';
        }
    }
}