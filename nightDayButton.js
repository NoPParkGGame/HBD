let coloring={
    nightDay:function(self,coloring1,coloring2){
        targetBody=document.querySelector('body')
        if(self.value==="야간모드"){
            targetBody.style.backgroundColor=coloring1
            targetBody.style.color=coloring2
            self.value='주간모드'
        }
        else{
            targetBody.style.backgroundColor=coloring2
            targetBody.style.color=coloring1
            self.value="야간모드"
        }
    }
}