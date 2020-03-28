import 'package:flutter/material.dart';
import 'package:CoronaTracker/about.dart';
import 'package:CoronaTracker/advices.dart';
import 'package:CoronaTracker/google_map_base.dart';
import 'package:CoronaTracker/stats.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stay House',
      theme: ThemeData(
        primarySwatch: Colors.teal[700],
      ),
      home: DefaultTabController(
        length: 4,
        child: Scaffold(
          appBar: AppBar(
            title: Text('Stay House'),
            bottom: TabBar(
              tabs: <Widget>[
                Tab(
                  text: "Estatísticas",
                ),
                Tab(
                  text: "Mapas",
                ),
                Tab(
                  text: "Avisos",
                ),
                Tab(
                  text: "Sobre",
                ),
              ],
            ),
          ),
          body: TabBarView(
            physics: NeverScrollableScrollPhysics(),
            children: <Widget>[
              StatsPage(),
              BaseGoogleMap().getWidget(),
              AdvicesPage(),
              AboutPage()
            ],
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
