function storeOvers()
{
    const overs=document.getElementById('overs').value;
    const balls= overs*6;
    const whoIsBattingFirst=document.getElementById('whoIsBattingFirst').value.trim();
    const team1name=document.getElementById('team1name').value.trim();
    const team2name=document.getElementById('team2name').value.trim();
    document.getElementById('inputs-container').classList.add('hidden');
    const headCont=document.getElementById('teams-container');
    headCont.classList.remove('hidden');
    document.getElementById('team2h2').textContent=team2name;
    document.getElementById('team1h2').textContent=team1name;
    localStorage.setItem('whoIsBattingFirst',whoIsBattingFirst);
    if(whoIsBattingFirst==team1name)
    {
        document.getElementById('team1score').textContent=0;
       
         document.getElementById('team2upd').classList.add('hidden');
    }
    else
    {
        document.getElementById('team2score').textContent=0;
        
        document.getElementById('team1upd').classList.add('hidden');
    }
    const teamsCon=document.querySelector('#teams-container > div');
    teamsCon.style.display='flex';
    teamsCon.style.gap='1rem';   
    localStorage.setItem('balls',balls);
    document.getElementById('balls-rem').textContent=" "+balls;
}

function enterRuns(event)
{
    const eventSource=event.target.id;
    let runs;
    let ballEle=document.getElementById('balls-rem');
    let errorEl=document.getElementById('error');
if (eventSource=="team1btn")
{
runs=document.getElementById('team1runs').value.trim();
    if(runs.toLowerCase() == "wide"){
        runs=1;
        errorEl.textContent="";
    }
    else if(runs === "" || isNaN(parseInt(runs))){
        errorEl.textContent="Please enter number";
        return;
    }
    else {
        runs=parseInt(runs);
        errorEl.textContent="";
        ballEle.textContent=(parseInt(ballEle.innerText)-1).toString();
    }
    let scoreEle=document.getElementById('team1score');
    let scoreText=scoreEle.textContent.trim();
scoreEle.textContent=(runs+parseInt(isNaN(scoreText)?0:scoreText)).toString();
  if(ballEle.textContent.trim()==="0"){
        document.getElementById('team1upd').classList.add('hidden');
         if(document.getElementById('team2score').textContent == "")
{
    document.getElementById('team2upd').classList.remove('hidden');
    document.getElementById('team2score').textContent=0;
    document.getElementById('balls-rem').textContent=" "+localStorage.getItem('balls');
}}}
    else
    {
        runs=document.getElementById('team2runs').value.trim();
if(runs.toLowerCase() == "wide"){
        runs=1;
        errorEl.textContent="";
    }
    else if(runs === "" || isNaN(parseInt(runs))){
        errorEl.textContent="Please enter number";
        return;
    }
    else {
        runs=parseInt(runs);
        errorEl.textContent="";
        ballEle.textContent=(parseInt(ballEle.innerText)-1).toString();
    }
    let scoreEle=document.getElementById('team2score');
scoreEle.textContent=(runs+parseInt(scoreEle.textContent.trim())).toString();
    if(ballEle.textContent.trim()==="0"){
        document.getElementById('team2upd').classList.add('hidden');
         if(document.getElementById('team1score').textContent == "")
{
    document.getElementById('team1upd').classList.remove('hidden');
    document.getElementById('team1score').textContent=0;
    document.getElementById('balls-rem').textContent=" "+localStorage.getItem('balls');
}

}
    }
    if(ballEle.textContent.trim()==="0" && document.getElementById('team1score').textContent !="" && document.getElementById('team2score').textContent !="")
    {
        res.style.fontSize="2rem";
        let team1score=parseInt(document.getElementById('team1score').textContent.trim());
        let team2score=parseInt(document.getElementById('team2score').textContent.trim());
        if(team1score > team2score)
        {
            document.getElementById('res').textContent=document.getElementById('team1h2').textContent +" is winner";
        }
        else if(team2score > team1score){
            document.getElementById('res').textContent=document.getElementById('team2h2').textContent +" is winner";
        }
        else{
            document.getElementById('res').textContent="It is a tie";
            
        }
    }
    if(res.textContent=="It is a tie")
    {
        res.innerHTML="Super Over - Number of balls remaining:&nbsp;<span id='balls-rem'>6</span>";
        localStorage.setItem('balls', 6);
        document.getElementById('team1score').textContent="";
        document.getElementById('team2score').textContent="";
        document.getElementById('team1upd').classList.add('hidden');
        document.getElementById('team2upd').classList.add('hidden');
        if(localStorage.getItem('whoIsBattingFirst')==document.getElementById('team2h2').textContent) {
            document.getElementById('team1upd').classList.remove('hidden');
            document.getElementById('team1score').textContent="0";
        } else {
            document.getElementById('team2upd').classList.remove('hidden');
            document.getElementById('team2score').textContent="0";
        }
    }
}
