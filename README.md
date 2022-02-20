## OKTA installation
https://cli.okta.com/manual/#installation

# Add Flathub repo
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# install the package
flatpak install flathub com.okta.developer.CLI

# add this to your appropriate dot file
alias okta="flatpak run com.okta.developer.CLI"

Your Okta Domain: https://dev-7520515.okta.com
To set your password open this link:
https://dev-7520515.okta.com/welcome/drpQX5gx9JETk2XMRg1v

## docker

docker pull postgres:latest

docker run -d --name guitar-db -p 5432:5432 -e 'POSTGRES_PASSWORD=p@ssw0rd42' postgres
