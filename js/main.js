
	var playList = [{
			author: "led zeppelin",
			song: "stairway to heaven",
			duration: "2:03"
		},
		{
			author: "queen",
			song: "bohemian rhapsody",
			duration: "2:30"
		},
		{
			author: "lynyrd skynyrd",
			song: "free bird",
			duration: "1:56"
		},
		{
			author: "deep purple",
			song: "smoke on the water",
			duration: "3:03"
		},
		{
			author: "jimi hendrix",
			song: "all along the watchtower",
			duration: "2:53"
		},
		{
			author: "AC/DC",
			song: "back in black",
			duration: "2:43"
		},
		{
			author: "queen",
			song: "we will rock you",
			duration: "2:13"			
		},
		{
			author: "metallica",
			song: "enter sandman",
			duration: "3:03"			
		}
	];

		




function songs() {
	var i = 0,
		playlist = document.getElementById('playlist'),
		playlistItem = document.getElementsByClassName('ba-tune')[0],
		durationItem = document.getElementsByClassName('duration'),
		authorItem = document.getElementsByClassName('author'),
		songItem = document.getElementsByClassName('song');

	for (var i = 0; i < playList.length; i++) {
		durationItem[i].innerHTML = playList[i].duration;
		authorItem[i].innerHTML = playList[i].author;
		songItem[i].innerHTML = playList[i].song;

		if (i < playList.length-1) {
			var playlistItemCopy = document.createElement('li'),
			durationItemCopy = document.createElement('span'),
			authorItemCopy = document.createElement('span'),
			block = document.createElement('div'),
			songItemCopy = document.createElement('div'),
			svgHeart = document.createElement('svg');

		playlistItemCopy.classList.toggle('ba-tune');
		block.classList.toggle('ba-tune__top');
		durationItemCopy.classList.toggle('duration');
		authorItemCopy.classList.toggle('author');
		songItemCopy.classList.toggle('song'),
		svgHeart.classList.toggle('ba-tune__like');




		playlist.appendChild(playlistItemCopy);
		block.insertBefore(svgHeart, block.children[1]);
		svgHeart.innerHTML = `<use xlink:href="#icon-heart"><svg id="icon-heart" viewBox="0 0 32 32" width="100%" height="100%">
		<title>heart</title>
		<path d="M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"></path>
	</svg></use>`;

		playlistItemCopy.appendChild(block);
		playlistItemCopy.appendChild(songItemCopy);
		block.appendChild(durationItemCopy);
		block.appendChild(authorItemCopy);
		} 
		


	
	}
} 

songs();
