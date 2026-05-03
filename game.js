// 简单游戏逻辑
let playerHP = 100;
let dragonHP = 150;
let gameLog = [];

function attack() {
    const damage = Math.floor(Math.random() * 20) + 10;
    dragonHP -= damage;
    addLog(`⚔️ 你对恶龙造成 ${damage} 点伤害！`);
    
    if (dragonHP <= 0) {
        dragonHP = 0;
        addLog('🎉 胜利！恶龙被击败了！');
        return;
    }
    
    // 龙的反击
    dragonAttack();
    updateDisplay();
}

function heal() {
    const healAmount = Math.floor(Math.random() * 15) + 10;
    playerHP += healAmount;
    addLog(`❤️ 你恢复了 ${healAmount} 点生命值`);
    
    dragonAttack();
    updateDisplay();
}

function dragonAttack() {
    const damage = Math.floor(Math.random() * 15) + 5;
    playerHP -= damage;
    addLog(`🐉 恶龙对你造成 ${damage} 点伤害`);
    
    if (playerHP <= 0) {
        playerHP = 0;
        addLog('💀 你被恶龙击败了...');
    }
}

function resetGame() {
    playerHP = 100;
    dragonHP = 150;
    gameLog = [];
    addLog('🔄 游戏重新开始！');
    updateDisplay();
}

function addLog(message) {
    gameLog.push(message);
    if (gameLog.length > 5) gameLog.shift();
    
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = gameLog.map(msg => `<p>${msg}</p>`).join('');
}

function updateDisplay() {
    console.log(`玩家HP: ${playerHP}, 恶龙HP: ${dragonHP}`);
}