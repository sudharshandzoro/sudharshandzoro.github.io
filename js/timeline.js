google.charts.load('current', {'packages': ['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    dataTable.addColumn({ type: 'string', id: 'Skill' });
    dataTable.addColumn({ type: 'string', id: 'Category' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        
        ['SolidWorks', 'EngineeringPrograms', 'Total SolidWorks Experience', new Date(2019, 8, 1), new Date(utc)],
        ['SolidWorks', 'Project', 'NUROVER', new Date(2019, 10, 4), new Date(utc)],
        ['SolidWorks', 'Certification', 'CSWA - Mechanical Design Certified', new Date(2020, 11, 4), new Date(utc)],
        ['SolidWorks', 'Job', 'MKS Instruments', new Date(2021, 0, 11), new Date(2021, 5, 25)],
        ['SolidWorks', 'Job', 'Vicarious Surgical', new Date(2022, 0, 10), new Date(2022, 5, 24)],
        

        ['Fusion 360', 'EngineeringPrograms', 'Total Fusion 360 Experience', new Date(2016, 4, 0),  new Date(utc)],
        ['Fusion 360', 'Project', 'FTC Robotics - CAD', new Date(2016, 9, 0),  new Date(2019, 4, 20)],
        ['Fusion 360', 'Project', 'SeaPerch - ROV CAD', new Date(2018, 1, 0),  new Date(2019, 4, 20)],
        ['Fusion 360', 'Project', 'Plastic Tuba - CAD', new Date(2019, 0, 12),  new Date(2019, 4, 20)],
        ['Fusion 360', 'Project', 'Practice Marimba - CAD', new Date(2020, 7, 17),  new Date(2020, 7, 28)],
        ['Fusion 360', 'Job', 'Nextera Robotics', new Date(2021, 5, 1),  new Date(2021, 7, 24)],
        ['Fusion 360', 'Project', 'MMX CAD Team', new Date(2020, 4, 24),  new Date(utc)],
        ['Fusion 360', 'Project', 'DIY Binaural Microphone', new Date(2021, 6, 1),  new Date(2021, 7, 1)],
        

        // ['AutoCAD', 'EngineeringPrograms', 'Total AutoCAD Experience', new Date(2019, 8, 0),  new Date(utc)],
        

        ['MATLAB', 'EngineeringPrograms', 'Total MATLAB Experience', new Date(2019, 8, 0),  new Date(utc)],
        ['MATLAB', 'Project', 'Labs for Academic Courses', new Date(2020, 1, 3),  new Date(utc)],
        ['MATLAB', 'Project', 'NUROVER Arm Force Calculations', new Date(2021, 8, 1),  new Date(utc)],
        ['MATLAB', 'Project', 'Computation Fluid Dynamics Class', new Date(2022, 8, 1),  new Date(2022, 11, 1)],
        

        ['FDM 3D Printing', 'EngineeringSkills', 'Total 3D Printing Experience', new Date(2016, 4, 0),  new Date(utc)],
        ['FDM 3D Printing', 'Project', 'SeaPerch - Kort Nozzles', new Date(2018, 1, 0),  new Date(2019, 4, 20)],
        ['FDM 3D Printing', 'Project', 'Plastic Tuba - Valves', new Date(2019, 2, 12),  new Date(2019, 4, 20)],
        ['FDM 3D Printing', 'Project', 'Practice Marimba - Posts', new Date(2020, 7, 20),  new Date(2020, 7, 28)],
        ['FDM 3D Printing', 'Project', 'NUROVER', new Date(2019, 10, 4), new Date(utc)],
        // ['FDM 3D Printing', 'Job', 'Nextera Robotics', new Date(2021, 6, 1),  new Date(2021, 8, 24)],
        
        
        ['Tools / Machines', 'EngineeringSkills', 'Hand Tool Experience', new Date(2015, 9, 0),  new Date(utc)],
        ['Tools / Machines', 'EngineeringSkills', 'Soldering Experience', new Date(2018, 2, 0),  new Date(utc)],
        ['Tools / Machines', 'EngineeringSkills', 'Power Tool Experience', new Date(2016, 9, 0),  new Date(utc)],
        ['Tools / Machines', 'EngineeringSkills', 'CNC Mill and Lathe Experience', new Date(2021, 8, 0),  new Date(utc)],
        ['Tools / Machines', 'Job', 'Working at the Northeastern MIE Machine Shop', new Date(2021, 9, 0),  new Date(utc)],
        

        ['FEA', 'EngineeringSkills', 'Total Finite Element Analysis (FEA) Experience', new Date(2019, 3, 0),  new Date(utc)],
        

        ['Python', 'Coding', 'Total Python Experience', new Date(2017, 9, 0),  new Date(utc)],
        ['Python', 'Project', 'Stock Checking Bot', new Date(2020, 5, 5),  new Date(2020, 8, 26)],
        
        
        ['C', 'Coding', 'Total C Experience', new Date(2017, 9, 0),  new Date(utc)],
        

        ['HTML and CSS', 'Coding', 'Total HTML and CSS Experience', new Date(2016, 7, 0),  new Date(utc)],
        ['HTML and CSS', 'Project', 'Portfolio Website', new Date(2020, 8, 28),  new Date(utc)],


        ['PHP', 'Coding', 'Total PHP Experience', new Date(2021, 1, 5),  new Date(utc)],
        ['PHP', 'Project', 'DOSS Redesign', new Date(2021, 1, 5),  new Date(2021, 3, 25)],
        

        // ['Office Suite', 'General', 'Total Microsoft Word Experience', new Date(2014, 1, 0),  new Date(utc)],
        // ['Office Suite', 'General', 'Total Microsoft PowerPoint Experience', new Date(2014, 1, 0),  new Date(utc)],
        // ['Office Suite', 'General', 'Total Microsoft Excel Experience', new Date(2015, 8, 0),  new Date(utc)],
        
        // ['GSuite', 'General', 'Total Google Docs Experience', new Date(2015, 8, 0),  new Date(utc)],
        // ['GSuite', 'General', 'Total Google Slides Experience', new Date(2015, 8, 0),  new Date(utc)],
        // ['GSuite', 'General', 'Total Google Sheets Experience', new Date(2015, 8, 0),  new Date(utc)],
        // ['GSuite', 'General', 'Total Google Drive Experience', new Date(2015, 8, 0),  new Date(utc)],
    
        
    ]);

    var colors = [];
    var colorMap = {
        Coding: '#109618',
        Job: '#EADC6E',
        EngineeringPrograms: '#3366CC',
        EngineeringSkills: '#0099C6',
        General: '#FF9900',
        Certification: '#990099',
        Project: '#DC3912'
    };
    
    for (var i = 0; i < dataTable.getNumberOfRows(); i++) {
        colors.push(colorMap[dataTable.getValue(i, 1)]);
    }

    var rowHeight = 42;
    var chartHeight = (dataTable.getNumberOfRows() + 1) * rowHeight;

    var options = {
        
        hAxis: {
            // minValue: new Date(2012, 0, 0),
            textStyle: { fontName: "SB Body" },
        },
        
        timeline: { 
            groupByRowLabel: true,
            rowLabelStyle: {
                fontName: 'SB Body',
                fontSize: '20',
            },
            barLabelStyle: {
                fontName: 'SB Body',
                fontSize: '16',
            }
        },
        
        avoidOverlappingGridLines: true,
        height: chartHeight,
        fontName: 'SB Body',
        width: '100%',
        colors: colors,
    };

    // use a DataView to hide the category column from the Timeline
    var view = new google.visualization.DataView(dataTable);
    view.setColumns([0, 2, 3, 4]);

    chart.draw(view, options);
}

window.onresize = drawChart;