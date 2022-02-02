const deepPath = document.getElementsByClassName("navbar")[0].classList.contains("deeppath");
const very = document.getElementsByClassName("navbar")[0].classList.contains("very");

document.getElementsByClassName("navbar")[0].innerHTML = `<a href="${deepPath ? "../" : ""}${very ? "../" : ""}index.html"><img src="${deepPath ? "../" : ""}${very ? "../" : ""}assets/logo.png" width=45 height=45 style="position: relative; top: 8px; left: 20px;"/><span class="navtitle" style="position: relative; left: 35px;">Virus Invader</span></a>
		<div class="navlist" style="display: inline; position: relative; left: 60px;">
			<a href="${deepPath ? "../" : ""}${very ? "../" : ""}gamelibrary.html"><div class="navitem"><span class="navitem">Game Library</span></div></a>
			<a href="${deepPath ? "../" : ""}${very ? "../" : ""}tools.html"><div class="navitem"><span class="navitem">Web Tools</span></div></a>
			<a href="${deepPath ? "../" : ""}${very ? "../" : ""}cinema.html"><div class="navitem"><span class="navitem">Cinema</span></div></a>
			<a href="lol"><div class="navitem"><span class="navitem"></span></div></a>
			<!-- <div class="navitem"><span class="navitem">Community</span></div> -->
		</div>`;

document.getElementsByClassName("footer")[0].innerHTML = `<span class="footeritem" style="font-weight: 600;">by wintrcat</span><a href="${deepPath ? "../" : ""}${very ? "../" : ""}privacy.html"><span class="footeritem">Privacy Notice</span></a>`;