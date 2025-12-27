const betList = document.getElementById('bet-list');
const placeBetBtn = document.getElementById('place-bet');
let bets = [];

document.querySelectorAll('.event button').forEach(btn => {
    btn.addEventListener('click', () => {
        const eventName = btn.parentElement.getAttribute('data-event');
        const odd = btn.getAttribute('data-odd');
        bets.push({event: eventName, odd: odd});
        renderBets();
    });
});

function renderBets() {
    betList.innerHTML = '';
    bets.forEach((bet, index) => {
        const li = document.createElement('li');
        li.textContent = ${bet.event} - Odd: ${bet.odd};
        betList.appendChild(li);
    });
}

placeBetBtn.addEventListener('click', () => {
    if(bets.length > 0){
        alert('Bet Placed Successfully!');
        bets = [];
        renderBets();
    } else {
        alert('No bets selected!');
    }
});
