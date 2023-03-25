// alert('hello js');

var cl = console.log;

let users = [
    {
        userId: 1,
        id: 1,
        title: "are or do repels provide blacked out except option criticizes",
        body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
    },
    {
        userId: 1,
        id: 2,
        title: "who is being",
        body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    },
    {
        userId: 1,
        id: 3,
        title: "she repels troubles as if she were training, whoever she is",
        body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
    },
    {
        userId: 1,
        id: 4,
        title: "and he is blinded",
        body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    },
    {
        userId: 1,
        id: 5,
        title: "they don't know what they hate",
        body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
    }
];

const userinfo = document.getElementById("userinfo");

let result = '';

users.forEach(function (user) {
    result += `
            <div class="col-md-4 mb-4">
                <div class="cards">
                    <div class="card-header bg-primary text-light">
                        <h2>${user.title}</h2>
                    </div>
                    <div class="card-body bg-success text-light">
                        <p>${user.body}</p>
                    </div>
                    <div class="card-footer bg-dark text-warning">
                        <p>userId: ${user.userId},
                            id: ${user.id}</p>
                    </div>
                </div>
            </div>
        `;
        
})
userinfo.innerHTML = result;





