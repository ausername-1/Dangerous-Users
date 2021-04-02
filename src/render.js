async function setstats() {
    const stats = await fetch('https://discord.riverside.rocks/stats.json.php').then((res => res.json()))
    document.getElementById('reportstext').innerHTML = `we have ${stats.reports} reports!`
}

setstats()

const form = document.getElementById('checkuser')

form.addEventListener('submit', checkuser)

async function checkuser(event) {
    event.preventDefault()
    const userid = document.getElementById('userid').value;
    const data = await fetch(`https://discord.riverside.rocks/check.json.php?id=${userid}`).then((res) => res.json())
    document.getElementById('username').innerHTML = `<b>Username: ${data.username}<b><br>`
    document.getElementById('reports').innerHTML = `<b>Reports: ${data.reports}<b><br>`
    document.getElementById('totalreports').innerHTML = `<b>Total Reports: ${data.total_reports}<b><br>`
    document.getElementById('score').innerHTML = `<b>Score: ${data.score}<b>`
}

const reportuserform = document.getElementById('reportuser')

reportuserform.addEventListener('submit', reportuser)

async function reportuser(event) {
    event.preventDefault()
    const userid = document.getElementById('userid2').value;
    const details = document.getElementById('details').value;
    const key = "00ZFslk3AJ3BxAQuVe6d2r7BtEEX3Tnn6vOydLEZMbnFjyRt3ThN"

    const report = await fetch(`https://discord.riverside.rocks/report.json.php?key=${key}&id=${userid}&details=${details}`).then((res) => res.json())

    console.log(report)
}