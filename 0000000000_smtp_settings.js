migrate((app) => {
	let settings = app.settings()
	settings.meta.appName = "Coderick AI"
	settings.meta.appURL = "https://vc373513536337.coderick.net"
	settings.meta.senderAddress = "admin@vc373513536337.coderick.net"

	settings.smtp.enabled = true
	settings.smtp.host = "localhost"
	settings.smtp.port = 465
	settings.smtp.username = "admin@vc373513536337.coderick.net"
	settings.smtp.password = "b9a7b2b7ea473a1d2cc6631365ca3e1e"
	settings.smtp.tls = true

	app.save(settings)
})
