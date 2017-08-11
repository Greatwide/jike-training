<?php

    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    if($link){
        //连接成功，查询news表中的所有记录
        $sql='SELECT * FROM news order by id DESC ';
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