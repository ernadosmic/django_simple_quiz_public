const auto = new Map();

auto.set("mercedes", { "E2": { "Ernad": [0, 2, 3] } });
auto.set("golf", { "E2": { "Ernad": true } });

for (const [x, y] of auto) {
    console.log(`Rezultat: ${x}`)
    for (const i in y) {
        console.log(`Rezultat: ${y["E2"]["Ernad"]}`)

    }
}

