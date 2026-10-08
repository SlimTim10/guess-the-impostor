{ pkgs, lib, config, inputs, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    npm = {
      enable = true;
      # Run `npm install` if node_modules is missing
      install.enable = true;
    };
  };

  profiles = {
    dev.module = {
      processes.typecheck.exec = "npm run tsc";
      processes.prettier.exec = "npm run prettier-watch";
      processes.vite.exec = "npm run dev -- --host";
    };
  };
}
