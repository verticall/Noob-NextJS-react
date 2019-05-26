import Document ,{head,Main,NextScript} from "next/document";

export default class MyDocument extends Document{
    render(){
        return (
          <html>
            <head>
                <link rel="stylesheet" href="static/bower_components/bootstrap/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="static/bower_components/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="static/bower_components/Ionicons/css/ionicons.min.css" />
                <link rel="stylesheet" href="static/bower_components/jvectormap/jquery-jvectormap.css" />
                <link rel="stylesheet" href="static/dist/css/AdminLTE.min.css" />
                <link rel="stylesheet" href="static/dist/css/skins/_all-skins.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"/>

                <script src="static/bower_components/jquery/dist/jquery.min.js"></script>
                <script src="static/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                <script src="static/bower_components/fastclick/lib/fastclick.js"></script>
                <script src="static/dist/js/adminlte.min.js"></script>
            </head>
            <body className="hold-transition skin-yellow sidebar-mini">
                <div className="wrapper">
                    <Main />
                </div>
                <NextScript />
            </body>
          </html>
        );
    }
}