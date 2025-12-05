var audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const songTitle = document.getElementById('songTitle');
audio.src = "music/Strict Believer.m4a";
urls = ["music/Plastic_Beach.m4a","music/Balatro.m4a","music/Tally_Hall_Ruler_of_Everything.m4a","music/Storyteller.m4a","music/meganeko_Feral.m4a","music/Storyteller.m4a","music/Gorillaz _Tranz.m4a","music/Strict_Believer.m4a"];
savedsong= audio.src;

        onload = function() {
            songTitle.innerHTML = audio.src.split('/').pop().replace(/\.[^/.]+$/, "");
        }

        function togglePlay() {
            if (audio.paused) {
                audio.play();
                songTitle.innerHTML = audio.src.split('/').pop().replace(/\.[^/.]_+$/, "");
                playBtn.textContent = '=';
            } else {
                audio.pause();
                playBtn.textContent = '▶';
            }
        }

        function skipBackward() {
            audio.currentTime = Math.max(0, audio.currentTime - 10);    
        }

        function skipForward() {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        }

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                progressBar.value = (audio.currentTime / audio.duration) * 100;
                currentTimeEl.textContent = formatTime(audio.currentTime);
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audio.duration);
        });

        audio.addEventListener('ended', () => {
            savedsong= audio.src;
            playBtn.textContent = '▶';
            audio.currentTime = 0;
            progressBar.value = 0;
            currentTimeEl.textContent = formatTime(0);
            audio.src = urls[Math.floor(Math.random() * urls.length)];
            songTitle.innerHTML = audio.src.split('/').pop().replace(/\.[^/.]+$/, "");
        });

        progressBar.addEventListener('input', () => {
            if (audio.duration) {
                audio.currentTime = (progressBar.value / 100) * audio.duration;
            }
        });

        function nextSong() {
            savedsong= audio.src;
            let currentIndex = urls.indexOf(audio.src);
            audio.src = urls[Math.floor(Math.random() * urls.length)];
            audio.play();
            songTitle.innerHTML = audio.src.split('/').pop().replace(/\.[^/.]+$/, "");
            playBtn.textContent = '=';
        }

        function lastSong() {
            if (savedsong) {
                audio.src = savedsong;
                audio.play();
                songTitle.innerHTML = audio.src.split('/').pop().replace(/\.[^/.]+$/, "");
                playBtn.textContent = '=';
            }
        }