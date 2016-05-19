(ns micircle.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :interactors
 (fn [db]
   (reaction (filter #(= "interactor" (:object %)) (:data (:jamiobj @db))))))

(re-frame/register-sub
  :interactions
  (fn [db]
    (reaction (filter #(= "interaction" (:object %)) (:data (:jamiobj @db))))))

(re-frame/register-sub
  :app-db
  (fn [db]
    (reaction @db)))

(re-frame/register-sub
  :view-defs
  (fn [db]
    (reaction (-> @db :view :defs))))

(re-frame/register-sub
  :view-nodes
  (fn [db]
    (reaction (-> @db :view :nodes))))

(re-frame/register-sub
  :view-links
  (fn [db]
    (reaction (-> @db :view :links))))