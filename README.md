# podlet-dittnav-personalia

Podium-podlet for dittnav

## Lokal kjøring

Hot-reloading, men uten støtte for layout-server:

```shell
npm start
```

Podlet standalone (uten layout-server):

```shell
npm run build
npm run podlet
```

Podlet med [layout-server](https://github.com/navikt/layout-dittnav):

```shell
npm run build
npm run podlet

# Fra layout-server:
npm run layout
```
