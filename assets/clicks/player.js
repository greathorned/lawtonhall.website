// Shared click track player.
// Piece data is written into the page by _layouts/click.html as window.CLICK_PIECE,
// taken from the `piece:` front matter of a file in _clicks/.

function audioUrl(path) {
    // Root-relative paths ("/assets/...") get the site baseurl prepended.
    if (path.startsWith("/")) {
        return (window.CLICK_BASEURL || "") + path;
    }
    return path;
}


function initialize() {

    const piece = window.CLICK_PIECE;

    if (!piece || !piece.movements) {
        console.error("No click track data found on this page.");
        return;
    }

    // Click sound selector
    const clickTypeSelect = document.getElementById("clickType");

    piece.clickTypes.forEach(clickType => {
        const option = document.createElement("option");
        option.value = clickType.id;
        option.textContent = clickType.label;
        clickTypeSelect.appendChild(option);
    });

    // Choose a default click sound
    const ids = piece.clickTypes.map(clickType => clickType.id);
    clickTypeSelect.value = ids.includes(piece.defaultClick)
        ? piece.defaultClick
        : ids[0];

    // Container for all movements
    const movementList = document.getElementById("movementList");

    // Keep track of all movement players
    const movementPlayers = [];

    piece.movements.forEach(movement => {

        const movementElement = createMovement(
            movement,
            clickTypeSelect.value,
            piece.movements.length > 1
        );

        movementList.appendChild(movementElement.element);

        movementPlayers.push({
            movement: movement,
            player: movementElement.player
        });
    });


    // Change click sound for every movement
    clickTypeSelect.addEventListener("change", () => {

        const clickType = clickTypeSelect.value;

        movementPlayers.forEach(item => {

            const player = item.player;
            const movement = item.movement;

            // Remember current state
            const currentTime = player.currentTime;
            const playbackRate = player.playbackRate;
            const wasPlaying = !player.paused;

            // Change audio file
            player.src = audioUrl(movement.audio[clickType]);

            player.addEventListener("loadedmetadata", async () => {

                player.currentTime = currentTime;
                player.playbackRate = playbackRate;

                if (wasPlaying) {
                    await player.play();
                }

            }, { once: true });

        });

    });

}


function createMovement(movement, clickType, showTitle) {

    // Entire movement container
    const section = document.createElement("section");
    section.className = "movement";


    // Movement title (only needed when a piece has more than one movement)
    if (showTitle) {
        const title = document.createElement("h2");
        title.textContent = movement.movementTitle;
        section.appendChild(title);
    }


    // Audio player
    const player = document.createElement("audio");

    player.controls = true;
    player.preload = "metadata";
    player.src = audioUrl(movement.audio[clickType]);
    player.preservesPitch = true;

    section.appendChild(player);


    // Playback speed control
    const speedControl = document.createElement("div");
    speedControl.className = "speedControl";

    const speedHeader = document.createElement("div");
    speedHeader.className = "speedHeader";

    const speedLabel = document.createElement("label");
    speedLabel.textContent = "Playback Speed: ";

    const speedValue = document.createElement("span");
    speedValue.textContent = "100%";

    speedHeader.appendChild(speedLabel);
    speedHeader.appendChild(speedValue);

    const speedSlider = document.createElement("input");

    speedSlider.type = "range";
    speedSlider.min = "50";
    speedSlider.max = "100";
    speedSlider.step = "5";
    speedSlider.value = "100";

    speedSlider.addEventListener("input", () => {

        const percent = Number(speedSlider.value);

        player.playbackRate = percent / 100;
        speedValue.textContent = `${percent}%`;

    });

    speedControl.appendChild(speedHeader);
    speedControl.appendChild(speedSlider);

    section.appendChild(speedControl);


    // Cue buttons
    const cueList = document.createElement("div");
    cueList.className = "cueList";

    movement.sections.forEach(cue => {

        const button = document.createElement("button");

        button.textContent = cue.label;

        button.addEventListener("click", async () => {

            if (player.readyState < 1) {

                await new Promise(resolve => {
                    player.addEventListener(
                        "loadedmetadata",
                        resolve,
                        { once: true }
                    );
                });

            }

            player.currentTime = cue.time;

            await player.play();

        });

        cueList.appendChild(button);

    });

    section.appendChild(cueList);


    return {
        element: section,
        player: player
    };
}


initialize();
