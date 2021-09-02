import React from 'react'

class Generic extends React.Component {
  render() {

    return (
		<div id="wrapper">
			<header id="header">
				<h1>Thanks for getting in touch, message_name!</h1>
				<p>Rishi will respond to you soon ... </p>
				
				<ul class="actions stacked">
					<li><a href="/" class="button">Return to Portfolio</a></li>
				</ul>

			</header>
						
					
			<footer id="footer">
				<section>
					<h2>The world needs your help</h2>
					<p>This is a tough time we are living through and if possible please help to donate to the victims of the Beirut explosion in Lebanon by clicking the button below. Thanks!</p>
					<ul class="actions">
						<li><a href="https://www.unicef.org/lebanon/support-unicef-lebanon" class="button">Learn More</a></li>
					</ul>
				</section>
				<section>
					<h2>Contact info</h2>
					<dl class="alt">
						<dt>Address</dt>
						<dd>930 University Ave SE &bull; Minneapolis, MN 55414 &bull; USA</dd>
						<dt>Email</dt>
						<dd>rishi.selvakumaran@gmail.com</dd>
					</dl>
			
				</section>
				<p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
			</footer>
		</div>
    )
  }
}

export default Generic
