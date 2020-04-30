# QRCode Panel

The QRCode panel display a QRCode for the current DashBoard.

## Setup

To install and build the plugin on a local Grafana you will need `yarn` (`npm install -g yarn`).

First clone the project in the folder `/var/lib/grafana/plugins`.

Then you need to install the dependencies by running:

``` 
yarn install 
```

After that you can build the plugin by running the following command:

``` 
yarn build 
```

You can also run the code in development mode with:

``` 
yarn dev 
```

Finally, don't forget to restart the Grafana server with the folowing command:

``` 
sudo service grafana-server restart 
```

And go to `http://localhost:3000/`.
