#! /bin/sh

files=`ls -d *`;


for x in $files
do

    echo --------------------------- $x;
case "$1" in
    "cp" )
    cp $x/src/*.jsx /Users/bouda/work/github/bindoon/ice/react-materials/blocks/$x/src;
    ;;

    "build" )
    cd $x; npm run build; cd ..;
    ;;

    "publish" )
    cd $x;npm publish;cd ..;
    ;;

    "0.x-1.x" )
    cd $x; tnpm i; next-migrate src -m; idev build; idev screenshot; cd ..;
    ;;

    "migrate" )
    cd $x; next-migrate src -m; cd ..;
    ;;

    "updatepkg" )
    cd $x;node ../../../../updatepkg.js;cd ..;
    ;;
esac

done
