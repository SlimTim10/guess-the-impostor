(defun vterm-run-command (name cmd)
  "Run a command in a named vterm terminal."
  (progn
    (vterm-other-window name)
    (vterm-insert cmd)
    (vterm-send-return)))

(let ((project-name "guess-the-impostor-implementation"))
  (vterm-run-command (concat project-name "-ngrok") "export NIXPKGS_ALLOW_UNFREE=1 && nix shell nixpkgs#ngrok --impure --command ngrok http 5173")
  (vterm-run-command (concat project-name "-vite") "npm run dev -- --host")
  (vterm-run-command (concat project-name "-tsc") "npm run tsc")
  (vterm-run-command (concat project-name "-prettier") "npm run prettier-watch"))
