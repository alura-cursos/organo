import './Rodape.css'

const Rodape = () => {
	return (<footer className="footer">
		<section>
			<ul>
				<li>
					<a href="facebook.com" target="_blank">
						<img src="/imagens/fb.png" alt="" />
					</a>
				</li>
				<li>
					<a href="twitter.com" target="_blank">
						<img src="/imagens/tw.png" alt="" />
					</a>
				</li>
				<li>
					<a href="instagram.com" target="_blank">
						<img src="/imagens/ig.png" alt="" />
					</a>
				</li>
			</ul>
		</section>
		<section>
			<img src="/imagens/logo.png" alt="" />
		</section>
		<section>
			<p>
				Desenvolvido durante o curso de React da Alura,
			</p>
			<p>
				pela aluna Camila Gonçalves.
			</p>
		</section>
	</footer>)
}

export default Rodape