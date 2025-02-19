import { Button } from '../ui/button';

export default function Header() {
	return (
		<header>
			<h1>Start Up</h1>
			<nav>
				<ul>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/faq">FAQ</a>
					</li>
				</ul>
			</nav>
			<div>
				<Button>Sign Up</Button>
				<Button variant="secondary">Log In</Button>
			</div>
		</header>
	);
}
