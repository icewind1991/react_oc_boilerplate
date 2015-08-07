<?php

$c = \OC::$server;

\OC::$server->getNavigationManager()->add(function () {
	return [
		'id' => 'react_oc_boilerplate',
		'order' => 22,
		'name' => 'React Boilerplate',
		'href' => \OC::$server->getURLGenerator()->linkToRoute('react_oc_boilerplate.page.index'),
		'icon' => \OC::$server->getURLGenerator()->imagePath('react_oc_boilerplate', 'app.svg')
	];
});
