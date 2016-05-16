(ns micircle.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [micircle.core-test]))

(doo-tests 'micircle.core-test)
