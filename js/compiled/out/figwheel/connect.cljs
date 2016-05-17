(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [micircle.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/micircle.core.mount-root (apply js/micircle.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'micircle.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

