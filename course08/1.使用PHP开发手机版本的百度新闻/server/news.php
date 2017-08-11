<?php
    header("content-type:application/json;charset=utf-8");
    //echo "php执行";
    require_once('db.php');
    //定义常量，每次刷新10条新闻，为了演示动态加载新闻
    define("numOfpage",10);
    if($link){
        //连接成功
        $newstype=$_GET['newstype'];
        $newsstart=$_GET['newsloaded'];
        if($_GET['newstype']){

            $sql=sprintf("SELECT * FROM news where newstype='{$newstype}' LIMIT %d,%d",$newsstart,numOfpage);
            mysqli_query($link,"SET NAMES utf8");
            $result=mysqli_query($link,$sql);
            $senddata=array();
            while($row=mysqli_fetch_assoc($result)){
                array_push($senddata,array(
                    'id'=>$row['id'],
                    'newstype'=>$row['newstype'],
                    'newstitle'=>$row['newstitle'],
                    'newsimg'=>$row['newsimg'],
                    'newstime'=>$row['newstime'],
                    'newssrc'=>$row['newssrc'],
                ));
            }
            echo json_encode($senddata);
        }else{

            $sql='SELECT * FROM news';
            mysqli_query($link,"SET NAMES utf8");
            $result=mysqli_query($link,$sql);
            $senddata=array();
            while($row=mysqli_fetch_assoc($result)){
                array_push($senddata,array(
                    'id'=>$row['id'],
                    'newstype'=>$row['newstype'],
                    'newstitle'=>$row['newstitle'],
                    'newsimg'=>$row['newsimg'],
                    'newstime'=>$row['newstime'],
                    'newssrc'=>$row['newssrc'],
                ));
            }
            echo json_encode($senddata);
        }

    }else{
    	echo json_encode(array('连接' => '失败' ));
    }
    mysqli_close($link);
/*
    $arr=array('newstype'=>'百家',
                'newsimg'=>'img/news2.jpg',
                'newstime'=>'2017-05-02',
                'newssrc'=>'网易财经',
                'newstitle'=>'测试动态获取'
                );
    echo json_encode($arr);*/
?>