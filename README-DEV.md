## Optimizations

1. Change libraries to smaller ones based on needs (parallax, infinite carousel, aos(alternative: scroll out), Colcade(can use pure css))
2. Image optimizations (quality, sizes, metatags, cdns)
3. Lazy loading components
4. Refactor code/data files
5. Keep it DRY
6. Other devices versions
7. Cross platform compatibility

## Todos

1. Opacity on scroll?
2. Rework layout component structure (or remove it entirely)
3. Latest post instagram
4. Share my projects on socials
5. Navbar animation
6. Find a way to track who's sharing the projects
7. Hover effect on the grid
8. Animations on grid
9. Add routing for projects and services
10. Back to Top Button

## Inspirations

1. https://colorlib.com/preview/#niko
2. https://colorlib.com/preview/#oneder
3. https://colorlib.com/demo?theme=glint
4. https://colorlib.com/preview/#ronin
5. https://colorlib.com/preview/#alime

## Code for Instagram

https://api.instagram.com/oauth/authorize
?client_id=173685893978981
&redirect_uri=https://sebo94.github.io/goddess-portfolio-online/
&scope=user_profile,user_media
&response_type=code

https://sebo94.github.io/goddess-portfolio-online/?code=AQAk0eZkDV4B85JtiNN65YW5KqCzU3CZ8wHz0dycv5-_Ibhv2W77K37X_KR3iqOta5MZX3QVBhWb_NC3OjFO30JbZltC2aao9NGuCY7TmggW61RJ5xj1Y0N_RGB6NSasXZcgrYo5FKuD88jqvQ1jX2dUcU8a5ZhBM8B7dWEWuKVyRvQWLegC9sEK-1k_V-qj_fMcOUfkj_c9o-UjxHopIVw2XessUIp0YLO4WG_nGJYwdg #\_

curl -X POST \ https://api.instagram.com/oauth/access_token \ -F client_id=173685893978981 \ -F client_secret=2982730464fdaf1a99cc1a33aed1550e \ -F grant_type=authorization_code \ -F redirect_uri=https://sebo94.github.io/goddess-portfolio-online/ \ -F code=AQAk0eZkDV4B85JtiNN65YW5KqCzU3CZ8wHz0dycv5-\_Ibhv2W77K37X_KR3iqOta5MZX3QVBhWb_NC3OjFO30JbZltC2aao9NGuCY7TmggW61RJ5xj1Y0N_RGB6NSasXZcgrYo5FKuD88jqvQ1jX2dUcU8a5ZhBM8B7dWEWuKVyRvQWLegC9sEK-1k_V-qj_fMcOUfkj_c9o-UjxHopIVw2XessUIp0YLO4WG_nGJYwdg

https://api.instagram.com/oauth/access_token/client_id=173685893978981/client_secret=2982730464fdaf1a99cc1a33aed1550e/grant_type=authorization_code/redirect_uri=https://sebo94.github.io/goddess-portfolio-online/code=AQAk0eZkDV4B85JtiNN65YW5KqCzU3CZ8wHz0dycv5-_Ibhv2W77K37X_KR3iqOta5MZX3QVBhWb_NC3OjFO30JbZltC2aao9NGuCY7TmggW61RJ5xj1Y0N_RGB6NSasXZcgrYo5FKuD88jqvQ1jX2dUcU8a5ZhBM8B7dWEWuKVyRvQWLegC9sEK-1k_V-qj_fMcOUfkj_c9o-UjxHopIVw2XessUIp0YLO4WG_nGJYwdg

{
"access_token": "IGQVJVWnBXTDMtb2RXM084MGtzNHhmRUxlY0JNaXdRSlJsNUE3cWc3aVBiNHdzZAU8ydnlnR3JYQmhSOC1qb2RJdmxfT0ZAOMkZAodHpveDNZAMl9SMk5MWHYxVkhzS1M2RXdFS25QbE5rVjlJWnB1SnpJam5uOFdyTExERzRF",
"user_id": 17841407057278764
}

https://graph.instagram.com/17841407057278764?fields=id,username&access_token=IGQVJVWnBXTDMtb2RXM084MGtzNHhmRUxlY0JNaXdRSlJsNUE3cWc3aVBiNHdzZAU8ydnlnR3JYQmhSOC1qb2RJdmxfT0ZAOMkZAodHpveDNZAMl9SMk5MWHYxVkhzS1M2RXdFS25QbE5rVjlJWnB1SnpJam5uOFdyTExERzRF

https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,caption&access_token=IGQVJVWnBXTDMtb2RXM084MGtzNHhmRUxlY0JNaXdRSlJsNUE3cWc3aVBiNHdzZAU8ydnlnR3JYQmhSOC1qb2RJdmxfT0ZAOMkZAodHpveDNZAMl9SMk5MWHYxVkhzS1M2RXdFS25QbE5rVjlJWnB1SnpJam5uOFdyTExERzRF

curl -X GET \ 'https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJ...'
