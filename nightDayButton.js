let coloring={
    nightDay:function(self,coloring1,coloring2){
        [targetBody,targetAllBorder]=[document.querySelector('body'),document.querySelectorAll('.border')]
        if(self.value==="야간모드"){
            targetBody.style.backgroundColor=coloring1;
            targetBody.style.color=coloring2;
            self.value="주간모드";
            $('.border').css('borderColor',coloring2);
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
            $('.border').css('borderColor',coloring1);
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