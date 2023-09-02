let coloring={
    nightDay:function(self,coloring1,coloring2){
        [targetBody,targetAllBorder]=[document.querySelector('body'),document.querySelectorAll('.border')]
        let refh1=document.querySelector('h1');
        let borderList=['#grid','#survey','.uni',refh1]
        if(self.value==="야간모드"){
            targetBody.style.backgroundColor=coloring1;
            targetBody.style.color=coloring2;
            let i=0;
        
            while(i<borderList.length){
                borderList[i].style.borderColor='white';
            }
            self.value="주간모드";
        }
        else if(self.value==="주간모드"){
         
            targetBody.style.backgroundColor=coloring2;
            targetBody.style.color=coloring1;
            let i=0;
            while(i<borderList.length){
                borderList[i].style.borderColor=coloring1;
            }         
            self.value='야간모드';
        }
    }
}