let coloring={
    nightDay:function(self,coloring1,coloring2){
        [targetBody]=[document.querySelector('body')]
        let cssborders=['.page','#grid','#survey','.uni'];
        let bordertest='.page';
        if(self.value==="야간모드"){
            targetBody.style.backgroundColor=coloring1;
            targetBody.style.color=coloring2;
            self.value="주간모드";
            bordertest.style.borderColor=coloring2;
            /*
            let i=0;
            while(i<targetAllBorder.length){
                targetAllBorder[i].style.borderColowr=coloring2;
                i+=1
            }
            */
            
        }
        else if(self.value==="주간모드"){
            targetBody.style.backgroundColor=coloring2;
            targetBody.style.color=coloring1;
            self.value='야간모드';
            targetAllBorder.style.borderColor=coloring1;
            /*
            let i=0;
            while(i<targetAllBorder.length){
                targetAllBorder[i].style.borderColor=coloring1;
                i+=1
            }
            */
        }
    }
}