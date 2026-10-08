# Development

## Prerequisites

- [nix](https://nixos.org/download/)
- [devenv](https://devenv.sh/) >= 2.1
- [direnv](https://direnv.net/)

## Start dev environment

```bash
devenv --profile dev up
```

## Expose to the internet

``` bash
nix develop --command ngrok http 5173
```
