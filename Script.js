let amount = 10;

// make a place to put the pings
let container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
container.setAttributeNS(null, 'viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
container.style.width = '100vw';
container.style.height = '100vh';
container.style.position = 'fixed';
container.style.top = 0;
container.style.left = 0;
container.style.zIndex = -1;

let pings =
    new Array(amount)
    .fill(0)
    .map(() => document.createElementNS('http://www.w3.org/2000/svg', 'circle'));
    
for (const [i, ping] of pings.entries()) {
    let x = Math.floor(Math.random() * 100) - 5 + '%';
    let y = Math.floor(Math.random() * 100) - 5 + '%';
    
    ping.setAttributeNS(null, 'cx', x);
    ping.setAttributeNS(null, 'cy', y);
    ping.setAttributeNS(null, 'r', 50 + Math.random() * 100)
    
    ping.style.animation = `ping ${15 - Math.random() * 10}s ${Math.random() * 7}s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite both`;
    ping.style.fill = `hsl(${170 + (40 / amount) * i}, 100%, 50%)`;
    ping.style.transformOrigin = `${x} ${y}`;
    
    ping.addEventListener("animationiteration", () => {
        let x = Math.floor(Math.random() * 100) - 5 + '%';
        let y = Math.floor(Math.random() * 100) - 5 + '%';
        
        ping.setAttributeNS(null, 'cx', x);
        ping.setAttributeNS(null, 'cy', y);
        ping.setAttributeNS(null, 'r', 50 + Math.random() * 100)
        ping.style.transformOrigin = `${x} ${y}`;        
    })
    
    container.appendChild(ping);
}

document.getElementById('background').appendChild(container);